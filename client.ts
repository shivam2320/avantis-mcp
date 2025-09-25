import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerHelloTool } from './tools/hello-world.js';
import { registerHelloPrompt } from './prompts/hello-world.js';
import { registerHelloResource } from './resources/hello-world.js';
import { createErrorResponse, createSuccessResponse } from './utils/types.js';
import { PublicClient, createPublicClient, Address, getContract } from 'viem';
import { base } from 'viem/chains';
import { http } from 'viem';
import { getAuthContext } from '@osiris-ai/sdk';
import { OpenTradeParams, CloseTradeParams, UpdateTpAndSLParams, ModifyTradeParams } from './schema/index.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { EVMWalletClient } from "@osiris-ai/web3-evm-sdk";
import { serializeTransaction, encodeFunctionData } from 'viem';
import { TRADING_CONTRACT_ADDRESS, STORAGE_CONTRACT_ADDRESS, USDC_CONTRACT_ADDRESS, MULTICALL_CONTRACT_ADDRESS } from './utils/constants.js';
import { parseUnits, formatUnits } from 'viem';
import { createWalletClient } from 'viem';
import { findPairIndex, pairsData, getPairByIndex } from './utils/pairs-data.js';
import { TokenInfo } from './utils/types.js';
import { calculatePnL } from './utils/pnl-calculator.js';
import { ERC20_ABI } from "./utils/ABIs/ERC20_ABI.js";
import { TRADING_ABI } from "./utils/ABIs/TRADING_ABI.js";
import { MULTICALL_ABI } from "./utils/ABIs/MULTICALL_ABI.js";
import { HermesClient } from '@pythnetwork/hermes-client';
import { registerOpenTradeTools } from "./tools/open-trade.js";
import { registerCloseTradeTools } from "./tools/close-trade.js";
import { registerUpdateTpAndSLTools } from "./tools/update-tp-sl.js";
import { registerUpdateMarginTools } from "./tools/update-margin.js";
import { registerFetchBalancesTools } from "./tools/fetch-balance.js";
import { registerGetPriceTools } from "./tools/get-price.js";
import { registerGetPairsTools } from "./tools/get-pairs.js";
import { registerGetHistoryTools } from "./tools/get-history.js";
import { registerGetPositionsTools } from "./tools/get-positions.js";
import { z } from 'zod';


export class AvantisMCP {
  public hubBaseUrl: string;
  publicClient: PublicClient;
  walletToSession: Record<string, string> = {};
  chain: string;
  hermesClient: HermesClient;
  
  private priceIds: Record<string, string> = this.buildPriceIdsMapping();

  constructor(hubBaseUrl: string) {
    this.hubBaseUrl = hubBaseUrl;
    this.publicClient = createPublicClient({
      chain: base,
      transport: http(),
    }) as PublicClient;
    this.chain = "evm:eip155:8453";
    this.hermesClient = new HermesClient("https://hermes.pyth.network", {});
  }

  private buildPriceIdsMapping(): Record<string, string> {
    const priceIds: Record<string, string> = {};
    
    Object.values(pairsData).forEach((pair: any) => {
      if (pair.from && pair.to && pair.feed?.feedId) {
        const pairKey = `${pair.from}/${pair.to}`;
        priceIds[pairKey] = pair.feed.feedId;
      }
    });
    return priceIds;
  }

  async getUserAddresses(): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );
      const walletRecords = await client.getWalletRecords();
      if (walletRecords.length === 0) {
        throw new Error("No wallet record found");
      }

      const addresses = walletRecords.map((walletRecord) =>
        walletRecord.accounts.addresses.map((address) => ({
          chains: address.chains,
          address: address.address,
        }))
      );
      return createSuccessResponse("Successfully got user addresses", {
        addresses,
      });
    } catch (error: any) {
      const errorMessage = error.message || "Failed to get user addresses";
      return createErrorResponse(errorMessage);
    }
  }

  async chooseWallet(address: string): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }
      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );
      const walletRecords = await client.getWalletRecords();
      if (walletRecords.length === 0) {
        throw new Error("No wallet record found");
      }
      const walletRecord = walletRecords.find((walletRecord) =>
        walletRecord.accounts.addresses.some(
          (_address) => _address.address.toLowerCase() === address.toLowerCase()
        )
      );
      if (!walletRecord) {
        throw new Error("Wallet record not found");
      }
      this.walletToSession[context.sessionId] = address;

      return createSuccessResponse("Successfully chose wallet", {
        walletRecordId: walletRecord.id,
      });
    } catch (error: any) {
      const errorMessage = error.message || "Failed to choose wallet";
      return createErrorResponse(errorMessage);
    }
  }

  getAvailableTradingPairs(): string[] {
    return Object.keys(this.priceIds);
  }

  async getCurrentMidPrice(from: string, to: string): Promise<string> {
    try {
      const pairKey = `${from}/${to}`;
      const priceId = this.priceIds[pairKey];
      
      if (!priceId) {
        const availablePairs = this.getAvailableTradingPairs();
        throw new Error(`Price ID not found for trading pair: ${pairKey}. Available pairs: ${availablePairs.join(', ')}`);
      }
      
      const priceUpdates = await this.hermesClient.getLatestPriceUpdates([priceId]);

      if (!priceUpdates || !priceUpdates.parsed || priceUpdates.parsed.length === 0) {
        throw new Error(`No price data available for ${pairKey}`);
      }

      const priceUpdate = priceUpdates.parsed[0] as any;
      
      const priceValue = priceUpdate.price?.price;
      const expo = priceUpdate.price?.expo;
      
      if (!priceValue || expo === undefined) {
        throw new Error(`Invalid price data received for ${pairKey}`);
      }

      const actualPrice = parseFloat(priceValue) * Math.pow(10, expo);
      
      return actualPrice.toString();
    } catch (error) {
      throw new Error(`Failed to fetch price for ${from}/${to}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async getTokenInfo(tokenAddress: Address): Promise<TokenInfo> {
    try {
      const tokenContract = getContract({
        address: tokenAddress,
        abi: ERC20_ABI,
        client: this.publicClient,
      });

      const [name, symbol, decimals, totalSupply] = await Promise.all([
        tokenContract.read.name(),
        tokenContract.read.symbol(),
        tokenContract.read.decimals(),
        tokenContract.read.totalSupply(),
      ]);

      return {
        address: tokenAddress,
        name,
        symbol,
        decimals,
        totalSupply,
      };
    } catch (error) {
      throw new Error(`Failed to get token info: ${error}`);
    }
  }

  async getTokenAllowance(tokenAddress: Address): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const wallet = this.walletToSession[context.sessionId];
      if (!wallet) {
        const error = new Error(
          "No wallet found, you need to choose a wallet first with chooseWallet"
        );
        error.name = "NoWalletFoundError";
        return createErrorResponse(error);
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );

      const account = await client.getViemAccount(wallet, this.chain);

      const tokenContract = getContract({
        address: tokenAddress,
        abi: ERC20_ABI,
        client: this.publicClient,
      });

      const allowance = await tokenContract.read.allowance([
        account.address,
        STORAGE_CONTRACT_ADDRESS,
      ]);

      return createSuccessResponse("Successfully got token allowance", {
        allowance: allowance,
      });
    } catch (error) {
      throw new Error(`Failed to get token allowance: ${error}`);
    }
  }

  async approveToken(amount: bigint): Promise<CallToolResult> {
    const { token, context } = getAuthContext("osiris");
    if (!token || !context) {
      throw new Error("No token or context found");
    }

    const wallet = this.walletToSession[context.sessionId];
    if (!wallet) {
      const error = new Error(
        "No wallet found, you need to choose a wallet first with chooseWallet"
      );
      error.name = "NoWalletFoundError";
      return createErrorResponse(error);
    }
    const client = new EVMWalletClient(
      this.hubBaseUrl,
      token.access_token,
      context.deploymentId
    );

    const account = await client.getViemAccount(wallet, this.chain);

    if (!account) {
      const error = new Error(
        "No account found, you need to choose a wallet first with chooseWallet"
      );
      error.name = "NoAccountFoundError";
      return createErrorResponse(error);
    }

    try {
      const walletClient = createWalletClient({
        account: account,
        chain: base,
        transport: http(),
      });

      let tokenAddress = USDC_CONTRACT_ADDRESS as Address;

      const tokenInInfo = await this.getTokenInfo(tokenAddress);
      const amountInWei = parseUnits(amount.toString(), tokenInInfo.decimals);

      const preparedTx = await this.publicClient.prepareTransactionRequest({
        chain: base,
        account: account,
        to: tokenAddress,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [STORAGE_CONTRACT_ADDRESS, amountInWei],
        gas: 800000n,
      });
      const serializedTx = serializeTransaction({
        ...preparedTx,
        data: encodeFunctionData({
          abi: ERC20_ABI,
          functionName: "approve",
          args: [STORAGE_CONTRACT_ADDRESS, amountInWei],
        }),
      } as any);

      const signedTx = await client.signTransaction(
        ERC20_ABI,
        serializedTx,
        this.chain,
        account.address
      );

      const hash = await walletClient.sendRawTransaction({
        serializedTransaction: signedTx as `0x${string}`,
      });

      const receipt = await this.publicClient.waitForTransactionReceipt({
        hash: hash,
      });

      if (receipt.status !== "success") {
        throw new Error(`Transaction failed with status: ${receipt.status}`);
      }

      return createSuccessResponse("Successfully approved token", {
        hash: hash,
        receipt: receipt,
      });
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        return createErrorResponse(error.response.data.error);
      }
      const errorMessage = error.message || "Failed to approve token";
      return createErrorResponse(errorMessage);
    }
  }

  async openTrade(params: OpenTradeParams): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const wallet = this.walletToSession[context.sessionId];
      if (!wallet) {
        throw new Error(
          "No wallet found, you need to choose a wallet first with chooseWallet"
        );
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );

      const account = await client.getViemAccount(wallet, this.chain);
      if (!account) {
        throw new Error(
          "No account found, you need to choose a wallet first with chooseWallet"
        );
      }

      const { _trade, _type, _slippageP } = params;

      let pairIndex: number;
      try {
        pairIndex = findPairIndex(_trade.from, _trade.to || "USD");
      } catch (error) {
        throw new Error(
          `Invalid trading pair: ${_trade.from}/${_trade.to || "USD"}. ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }

      let openPrice: string;
      if (_trade.openPrice) {
        openPrice = _trade.openPrice;
      } else {
        try {
          openPrice = await this.getCurrentMidPrice(_trade.from, _trade.to || "USD");
        } catch (error) {
          throw new Error(
            `Failed to fetch current market price for ${_trade.from}/${
              _trade.to || "USD"
            }: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }

      const walletClient = createWalletClient({
        account: account,
        chain: base,
        transport: http(),
      });

      const tradeArray = {
        trader: _trade.trader as `0x${string}`,
        pairIndex: pairIndex,
        index: Number(_trade.index ?? "0"),
        initialPosToken: 0,
        positionSizeUSDC: parseUnits(_trade.positionSizeUSDC, 6),
        openPrice: parseUnits(openPrice, 10),
        buy: _trade.buy ?? true,
        leverage: parseUnits(_trade.leverage, 10),
        tp: parseUnits(_trade.tp, 10),
        sl: parseUnits(_trade.sl, 10),
        timestamp: Date.now(),
      };

      const preparedTx = await walletClient.prepareTransactionRequest({
        to: TRADING_CONTRACT_ADDRESS,
        abi: TRADING_ABI,
        functionName: "openTrade",
        args: [tradeArray, _type, _slippageP],
        gas: 800000n,
      });

      const serializedTx = serializeTransaction({
        ...preparedTx,
        data: encodeFunctionData({
          abi: TRADING_ABI,
          functionName: "openTrade",
          args: [tradeArray, _type, _slippageP],
        }),
      } as any);

      const signedTx = await client.signTransaction(
        TRADING_ABI,
        serializedTx,
        this.chain,
        account.address
      );
      const hash = await walletClient.sendRawTransaction({
        serializedTransaction: signedTx as `0x${string}`,
      });

      const receipt = await this.publicClient.waitForTransactionReceipt({
        hash: hash,
      });

      if (receipt.status !== "success") {
        throw new Error(`Transaction failed with status: ${receipt.status}`);
      }

      return createSuccessResponse("Successfully opened trade", {
        hash: hash,
        trade: _trade,
        type: _type,
        slippage: _slippageP,
        receipt: receipt,
      });
    } catch (error: any) {
      if (error.response?.data?.error) {
        return createErrorResponse(error.response.data.error);
      }
      return createErrorResponse(error);
    }
  }

  async closeTradeMarket(params: CloseTradeParams): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const wallet = this.walletToSession[context.sessionId];
      if (!wallet) {
        throw new Error(
          "No wallet found, you need to choose a wallet first with chooseWallet"
        );
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );

      const account = await client.getViemAccount(wallet, this.chain);
      if (!account) {
        throw new Error(
          "No account found, you need to choose a wallet first with chooseWallet"
        );
      }

      const { from, to, _index, _amount } = params;

      let pairIndex: number;
      try {
        pairIndex = findPairIndex(from, to || "USD");
      } catch (error) {
        throw new Error(
          `Invalid trading pair: ${from}/${to || "USD"}. ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }

      const walletClient = createWalletClient({
        account: account,
        chain: base,
        transport: http(),
      });

      let amountToClose: string;
      if (!_amount) {
        const traderAddress = account.address;
        
        const responseData = await this.getPositionsData(traderAddress);
        
        if (!responseData || !responseData.active_trades || !Array.isArray(responseData.active_trades)) {
          throw new Error("No active trades found");
        }
        
        const positionIndex = Number(_index || "0");
        
        
        const targetPosition = responseData.active_trades.find(
          (trade: any) => trade.trade.pairIndex === pairIndex && trade.trade.index === positionIndex
        );
        
        if (!targetPosition) {
          const availablePositions = responseData.active_trades
            .filter((trade: any) => trade.trade.pairIndex === pairIndex)
            .map((trade: any) => trade.trade.index);
          
          throw new Error(
            `No position found for pair ${from}/${to || "USD"} at index ${positionIndex}. ` +
            `Available positions for this pair: ${availablePositions.join(', ')}`
          );
        }
        
        amountToClose = targetPosition.trade.collateralUSDC.toString();
      } else {
        amountToClose = _amount;
      }

      const amountInWei = parseUnits(amountToClose, 6);

      const preparedTx = await walletClient.prepareTransactionRequest({
        to: TRADING_CONTRACT_ADDRESS,
        abi: TRADING_ABI,
        functionName: "closeTradeMarket",
        args: [pairIndex, Number(_index || "0"), amountInWei],
        gas: 800000n,
      });

      const serializedTx = serializeTransaction({
        ...preparedTx,
        data: encodeFunctionData({
          abi: TRADING_ABI,
          functionName: "closeTradeMarket",
          args: [pairIndex, Number(_index || "0"), amountInWei],
        }),
      } as any);

      const signedTx = await client.signTransaction(
        TRADING_ABI,
        serializedTx,
        this.chain,
        account.address
      );

      const hash = await walletClient.sendRawTransaction({
        serializedTransaction: signedTx as `0x${string}`,
      });

      const receipt = await this.publicClient.waitForTransactionReceipt({
        hash: hash,
      });

      if (receipt.status !== "success") {
        throw new Error(`Transaction failed with status: ${receipt.status}`);
      }

      return createSuccessResponse("Successfully closed trade", {
        hash: hash,
        pairIndex,
        index: _index || "0",
        amount: _amount,
        receipt: receipt,
      });
    } catch (error: any) {
      if (error.response?.data?.error) {
        return createErrorResponse(error.response.data.error);
      }
      return createErrorResponse(error);
    }
  }

  async updateTpAndSl(params: UpdateTpAndSLParams): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const wallet = this.walletToSession[context.sessionId];
      if (!wallet) {
        throw new Error(
          "No wallet found, you need to choose a wallet first with chooseWallet"
        );
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );

      const account = await client.getViemAccount(wallet, this.chain);
      if (!account) {
        throw new Error(
          "No account found, you need to choose a wallet first with chooseWallet"
        );
      }

      const { from, to, _index, _newTP, _newSL } = params;

      let pairIndex: number;
      try {
        pairIndex = findPairIndex(from, to || "USD");
      } catch (error) {
        throw new Error(
          `Invalid trading pair: ${from}/${to || "USD"}. ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }

      const walletClient = createWalletClient({
        account: account,
        chain: base,
        transport: http(),
      });

      const newTPInWei = parseUnits(_newTP, 10);
      const newSLInWei = parseUnits(_newSL, 10);

      const priceId = this.priceIds[`${from}/${to || "USD"}`];
      const priceData = await this.hermesClient.getLatestPriceUpdates([priceId]);
      const priceUpdateData = ["0x" + (priceData[0] as any).binary.data[0]];

      const preparedTx = await walletClient.prepareTransactionRequest({
        to: TRADING_CONTRACT_ADDRESS,
        abi: TRADING_ABI,
        functionName: "updateTpAndSl",
        args: [pairIndex, Number(_index || "0"), newSLInWei, newTPInWei, priceUpdateData],
        gas: 800000n,
      });

      const serializedTx = serializeTransaction({
        ...preparedTx,
        data: encodeFunctionData({
          abi: TRADING_ABI,
          functionName: "updateTpAndSl",
          args: [pairIndex, Number(_index || "0"), newSLInWei, newTPInWei, priceUpdateData],
        }),
      } as any);

      const signedTx = await client.signTransaction(
        TRADING_ABI,
        serializedTx,
        this.chain,
        account.address
      );

      const hash = await walletClient.sendRawTransaction({
        serializedTransaction: signedTx as `0x${string}`,
      });

      const receipt = await this.publicClient.waitForTransactionReceipt({
        hash: hash,
      });

      if (receipt.status !== "success") {
        throw new Error(`Transaction failed with status: ${receipt.status}`);
      }

      return createSuccessResponse("Successfully updated TP and SL", {
        hash: hash,
        pairIndex,
        index: _index || "0",
        newTP: _newTP,
        newSL: _newSL,
        receipt: receipt,
      });
    } catch (error: any) {
      if (error.response?.data?.error) {
        return createErrorResponse(error.response.data.error);
      }
      return createErrorResponse(error);
    }
  }

  async updateMargin(params: ModifyTradeParams): Promise<CallToolResult> {
    try {
      const { token, context } = getAuthContext("osiris");
      if (!token || !context) {
        throw new Error("No token or context found");
      }

      const wallet = this.walletToSession[context.sessionId];
      if (!wallet) {
        throw new Error(
          "No wallet found, you need to choose a wallet first with chooseWallet"
        );
      }

      const client = new EVMWalletClient(
        this.hubBaseUrl,
        token.access_token,
        context.deploymentId
      );

      const account = await client.getViemAccount(wallet, this.chain);
      if (!account) {
        throw new Error(
          "No account found, you need to choose a wallet first with chooseWallet"
        );
      }

      const { from, to, _index, _amount, _type } = params;

      let pairIndex: number;
      try {
        pairIndex = findPairIndex(from, to || "USD");
      } catch (error) {
        throw new Error(
          `Invalid trading pair: ${from}/${to || "USD"}. ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }

      const walletClient = createWalletClient({
        account: account,
        chain: base,
        transport: http(),
      });

      const amountInWei = parseUnits(_amount, 6);

      const priceId = this.priceIds[`${from}/${to || "USD"}`];
      const priceData = await this.hermesClient.getLatestPriceUpdates([priceId]);
      const priceUpdateData = ["0x" + (priceData[0] as any).binary.data[0]];

      const preparedTx = await walletClient.prepareTransactionRequest({
        to: TRADING_CONTRACT_ADDRESS,
        abi: TRADING_ABI,
        functionName: "updateMargin",
        args: [pairIndex, Number(_index || "0"), Number(_type), amountInWei, priceUpdateData],
        gas: 800000n,
      });

      const serializedTx = serializeTransaction({
        ...preparedTx,
        data: encodeFunctionData({
          abi: TRADING_ABI,
          functionName: "updateMargin",
          args: [pairIndex, Number(_index || "0"), Number(_type), amountInWei, priceUpdateData],
        }),
      } as any);

      const signedTx = await client.signTransaction(
        TRADING_ABI,
        serializedTx,
        this.chain,
        account.address
      );

      const hash = await walletClient.sendRawTransaction({
        serializedTransaction: signedTx as `0x${string}`,
      });

      const receipt = await this.publicClient.waitForTransactionReceipt({
        hash: hash,
      });

      if (receipt.status !== "success") {
        throw new Error(`Transaction failed with status: ${receipt.status}`);
      }

      return createSuccessResponse("Successfully updated margin", {
        hash: hash,
        pairIndex,
        index: _index || "0",
        amount: _amount,
        type: _type,
        receipt: receipt,
      });
    } catch (error: any) {
      if (error.response?.data?.error) {
        return createErrorResponse(error.response.data.error);
      }
      return createErrorResponse(error);
    }
  }

  async getUserTradingHistory(address: string, limit: number = 5): Promise<any> {
    try {
      const apiUrl = `https://api.avantisfi.com/v2/history/portfolio/top/${address}`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error('API returned unsuccessful response');
      }

      if (data.portfolio && data.portfolio.length > limit) {
        data.portfolio = data.portfolio.slice(0, limit);
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch trading history: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async getPositionsData(trader?: string): Promise<any> {
    try {
      if (!trader) {
        const { token, context } = getAuthContext("osiris");
        if (!token || !context) {
          throw new Error("No token or context found");
        }

        const client = new EVMWalletClient(
          this.hubBaseUrl,
          token.access_token,
          context.deploymentId
        );
        const walletRecords = await client.getWalletRecords();
        if (walletRecords.length === 0) {
          throw new Error("No wallet record found");
        }
        
        const firstWallet = walletRecords[0];
        if (!firstWallet.accounts.addresses.length) {
          throw new Error("No addresses found in wallet");
        }
        
        trader = firstWallet.accounts.addresses[0].address;
      }

      if (!trader.match(/^0x[a-fA-F0-9]{40}$/)) {
        throw new Error("Invalid trader address format");
      }

      // Get the multicall contract
      const multicallContract = getContract({
        address: MULTICALL_CONTRACT_ADDRESS as Address,
        abi: MULTICALL_ABI,
        client: this.publicClient,
      });

      const result = await multicallContract.read.getPositions([trader as Address]) as [any[], any[]];
      
      const [trades, pendingOpenLimitOrders] = result;

      const activeTrades = [];
      for (const aggregatedTrade of trades) {
        const trade = aggregatedTrade.trade;
        const tradeInfo = aggregatedTrade.tradeInfo;
        const marginFee = aggregatedTrade.marginFee;
        const liquidationPrice = aggregatedTrade.liquidationPrice;
        
        if (Number(trade.leverage) <= 0) {
          continue;
        }

        const pairIndex = Number(trade.pairIndex);
        const pairInfo = getPairByIndex(pairIndex);
        
        let currentPrice = 0;
        let pnl = null;
        let pairSymbol = '';

        if (pairInfo) {
          pairSymbol = `${pairInfo.from}/${pairInfo.to}`;
          
          try {
            currentPrice = parseFloat(await this.getCurrentMidPrice(pairInfo.from, pairInfo.to));
            
            const entryPrice = trade.openPrice ? parseFloat(formatUnits(trade.openPrice.toString(), 10)) : 0;
            const collateralUSDC = parseFloat(formatUnits(trade.initialPosToken.toString(), 6));
            const leverage = parseFloat(formatUnits(trade.leverage.toString(), 10));
            
            if (entryPrice > 0 && currentPrice > 0 && collateralUSDC > 0 && leverage > 0) {
              pnl = calculatePnL({
                isLong: trade.buy,
                entryPrice: entryPrice,
                currentPrice: currentPrice,
                size: collateralUSDC,
                leverage: leverage
              });
            }
          } catch (error) {
            console.warn(`Failed to fetch current price for ${pairSymbol}:`, error);
          }
        }

        const tradeDetails = {
          trade: {
            trader: trade.trader,
            pairIndex: pairIndex,
            index: Number(trade.index),
            collateralUSDC: parseFloat(formatUnits(trade.initialPosToken.toString(), 6)),
            positionSizeUSDC: trade.initialPosToken ? parseFloat(formatUnits(trade.initialPosToken.toString(), 6)) * parseFloat(formatUnits(trade.leverage.toString(), 10)) : 0 ,
            openPrice: trade.openPrice ? parseFloat(formatUnits(trade.openPrice.toString(), 10)) : 0,
            buy: trade.buy,
            leverage: parseFloat(formatUnits(trade.leverage.toString(), 10)),
            tp: trade.tp && trade.tp > 0 ? parseFloat(formatUnits(trade.tp.toString(), 10)) : 0,
            sl: trade.sl && trade.sl > 0 ? parseFloat(formatUnits(trade.sl.toString(), 10)) : 0,
            timestamp: Number(trade.timestamp),
          },
          additional_info: {
            openInterestUSDC: tradeInfo.openInterestUSDC ? parseFloat(formatUnits(tradeInfo.openInterestUSDC.toString(), 6)) : 0,
            tpLastUpdated: Number(tradeInfo.tpLastUpdated),
            slLastUpdated: Number(tradeInfo.slLastUpdated),
            beingMarketClosed: tradeInfo.beingMarketClosed,
            lossProtectionTier: Number(tradeInfo.lossProtectionTier),
          },
          margin_fee: marginFee ? parseFloat(formatUnits(marginFee.toString(), 6)) : 0,
          liquidation_price: liquidationPrice ? parseFloat(formatUnits(liquidationPrice.toString(), 10)) : 0,
          pnl: pnl,
          current_price: currentPrice,
          pair_symbol: pairSymbol,
        };
        
        activeTrades.push(tradeDetails);
      }

      const activeLimitOrders = [];
      for (const aggregatedOrder of pendingOpenLimitOrders) {
        const order = aggregatedOrder.order;
        const liquidationPrice = aggregatedOrder.liquidationPrice;
        
        if (Number(order.leverage) <= 0) {
          continue;
        }

        const orderDetails = {
          trader: order.trader,
          pairIndex: Number(order.pairIndex),
          index: Number(order.index),
          positionSize: order.initialPosToken ? parseFloat(formatUnits(order.initialPosToken.toString(), 6)) * parseFloat(formatUnits(order.leverage.toString(), 10)) : 0,
          buy: order.buy,
          leverage: parseFloat(formatUnits(order.leverage.toString(), 10)),
          tp: order.tp && order.tp > 0 ? parseFloat(formatUnits(order.tp.toString(), 10)) : 0,
          sl: order.sl && order.sl > 0 ? parseFloat(formatUnits(order.sl.toString(), 10)) : 0,
          price: order.price ? parseFloat(formatUnits(order.price.toString(), 10)) : 0,
          slippageP: order.slippageP ? parseFloat(formatUnits(order.slippageP.toString(), 6)) : 0,
          block: Number(order.block),
          liquidation_price: liquidationPrice ? parseFloat(formatUnits(liquidationPrice.toString(), 10)) : 0,
        };
        
        activeLimitOrders.push(orderDetails);
      }

      return {
        trader: trader,
        active_trades: activeTrades,
        pending_limit_orders: activeLimitOrders,
        total_active_trades: activeTrades.length,
        total_pending_orders: activeLimitOrders.length,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw error;
    }
  }

  async getPositions(trader?: string): Promise<CallToolResult> {
    try {
      const responseData = await this.getPositionsData(trader);
      return createSuccessResponse(
        `✅ Retrieved ${responseData.active_trades.length} active trades and ${responseData.pending_limit_orders.length} pending limit orders for trader ${responseData.trader}`,
        responseData
      );
    } catch (error) {
      return createErrorResponse(error);
    }
  }

  configureServer(server: McpServer): void {
    registerHelloTool(server);
    registerFetchBalancesTools(server, this);
    registerGetPriceTools(server, this);
    registerGetPairsTools(server, this);
    registerGetHistoryTools(server, this);
    registerGetPositionsTools(server, this);
    registerHelloPrompt(server);
    registerHelloResource(server);
    registerOpenTradeTools(server, this);
    registerCloseTradeTools(server, this);
    registerUpdateTpAndSLTools(server, this);
    registerUpdateMarginTools(server, this);
    server.tool(
      "getUserAddresses",
      "Get user addresses, you can choose a wallet with chooseWallet",
      {},
      async () => {
        const addresses = await this.getUserAddresses();
        return addresses;
      }
    );
    server.tool(
      "chooseWallet",
      "Choose a wallet, you can get user addresses with getUserAddresses",
      {
        address: z.string(),
      },
      async ({ address }) => {
        const wallet = await this.chooseWallet(address as Address);
        return wallet;
      }
    );
    server.tool(
      "approveToken",
      "Approve token spending",
      {
        amount: z.string(),
      },
      async ({ amount }) => {
        const allowance = await this.approveToken(BigInt(amount));
        return allowance;
      }
    );
    server.tool(
      "getTokenAllowance",
      "Get token allowance",
      {
        tokenAddress: z.string(),
      },
      async ({ tokenAddress }) => {
        const allowance = await this.getTokenAllowance(tokenAddress as Address);
        return allowance;
      }
    );
  }
}
