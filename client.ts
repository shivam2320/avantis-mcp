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
import { TRADING_CONTRACT_ADDRESS, STORAGE_CONTRACT_ADDRESS, USDC_CONTRACT_ADDRESS } from './utils/constants.js';
import { parseUnits } from 'viem';
import { createWalletClient } from 'viem';
import { findPairIndex, pairsData } from './utils/pairs-data.js';
import { TokenInfo } from './utils/types.js';
import { ERC20_ABI } from "./utils/ABIs/ERC20_ABI.js";
import { TRADING_ABI } from "./utils/ABIs/TRADING_ABI.js";
import { HermesClient } from '@pythnetwork/hermes-client';
import { registerOpenTradeTools } from "./tools/open-trade.js";
import { registerCloseTradeTools } from "./tools/close-trade.js";
import { registerUpdateTpAndSLTools } from "./tools/update-tp-sl.js";
import { registerUpdateMarginTools } from "./tools/update-margin.js";


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
    
    console.log(`Loaded ${Object.keys(priceIds).length} price IDs from pairs data:`, Object.keys(priceIds));
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

      console.log(`Fetching price for ${pairKey} using price ID: ${priceId}`);
      
      const priceUpdates = await this.hermesClient.getLatestPriceUpdates([priceId]);
      
      if (!priceUpdates || priceUpdates.length === 0) {
        throw new Error(`No price data available for ${pairKey}`);
      }

      const priceUpdate = priceUpdates[0] as any;
      const price = priceUpdate.price?.price;
      
      if (!price) {
        throw new Error(`Invalid price data received for ${pairKey}`);
      }

      console.log(`Retrieved price for ${pairKey}: ${price}`);
      return price.toString();
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
      console.log(
        JSON.stringify(
          {
            chain: base,
            account: account,
            to: tokenAddress,
            abi: ERC20_ABI,
            functionName: "approve",
            args: [STORAGE_CONTRACT_ADDRESS, amountInWei],
            gas: 8000000n,
          },
          (_, v) => (typeof v === "bigint" ? v.toString() : v),
          2
        )
      );
      console.log(
        JSON.stringify(
          preparedTx,
          (_, v) => (typeof v === "bigint" ? v.toString() : v),
          2
        )
      );
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
      console.log(
        JSON.stringify(
          {
            hubBaseUrl: this.hubBaseUrl,
            accessToken: token.access_token,
            deploymentId: context.deploymentId,
          },
          null,
          2
        )
      );

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
          console.log(
            `Auto-fetching current market price for ${_trade.from}/${
              _trade.to || "USD"
            }...`
          );
          openPrice = await this.getCurrentMidPrice(_trade.from, _trade.to || "USD");
          console.log(`Using current mid price: ${openPrice}`);
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

      // Convert USDC amount to wei (6 decimals)
      const amountInWei = parseUnits(_amount, 6);

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

      // Convert prices to wei (10 decimals as per specification)
      const newTPInWei = parseUnits(_newTP, 10);
      const newSLInWei = parseUnits(_newSL, 10);

      // Get price update data for the contract
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

      // Convert USDC amount to wei (6 decimals)
      const amountInWei = parseUnits(_amount, 6);

      // Get price update data for the contract
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

  configureServer(server: McpServer): void {
    registerHelloTool(server);
    registerHelloPrompt(server);
    registerHelloResource(server);
    registerOpenTradeTools(server, this);
    registerCloseTradeTools(server, this);
    registerUpdateTpAndSLTools(server, this);
    registerUpdateMarginTools(server, this);
  }
}
