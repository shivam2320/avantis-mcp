import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerHelloTool } from './tools/hello-world.js';
import { registerHelloPrompt } from './prompts/hello-world.js';
import { registerHelloResource } from './resources/hello-world.js';
import { createErrorResponse, createSuccessResponse } from './utils/types.js';
import { PublicClient, createPublicClient } from 'viem';
import { base } from 'viem/chains';
import { http } from 'viem';
import { getAuthContext } from '@osiris-ai/sdk';
import { OpenTradeParams } from './schema/index.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { EVMWalletClient } from "@osiris-ai/web3-evm-sdk";
import { serializeTransaction, encodeFunctionData } from 'viem';
import { TRADING_CONTRACT_ADDRESS } from './utils/constants.js';
import { parseUnits } from 'viem';
import { createWalletClient } from 'viem';

export class AvantisMCP {
  public hubBaseUrl: string;
  publicClient: PublicClient;
  walletToSession: Record<string, string> = {};
  chain: string;

  constructor(hubBaseUrl: string) {
    this.hubBaseUrl = hubBaseUrl;
    this.publicClient = createPublicClient({
      chain: base,
      transport: http(),
    });
    this.chain = "evm:eip155:8453";
  }

  // async openTrade(params: OpenTradeParams): Promise<CallToolResult> {
  //   try {
  //     const { token, context } = getAuthContext("osiris");
  //     if (!token || !context) {
  //       throw new Error("No token or context found");
  //     }
  //     console.log(
  //       JSON.stringify(
  //         {
  //           hubBaseUrl: this.hubBaseUrl,
  //           accessToken: token.access_token,
  //           deploymentId: context.deploymentId,
  //         },
  //         null,
  //         2
  //       )
  //     );

  //     const wallet = this.walletToSession[context.sessionId];
  //     if (!wallet) {
  //       throw new Error(
  //         "No wallet found, you need to choose a wallet first with chooseWallet"
  //       );
  //     }

  //     const client = new EVMWalletClient(
  //       this.hubBaseUrl,
  //       token.access_token,
  //       context.deploymentId
  //     );

  //     const account = await client.getViemAccount(wallet, this.chain);
  //     if (!account) {
  //       throw new Error(
  //         "No account found, you need to choose a wallet first with chooseWallet"
  //       );
  //     }

  //     const { _trade, _type, _slippageP } = params;

  //     let pairIndex: number;
  //     try {
  //       pairIndex = findPairIndex(_trade.from, _trade.to || "USD");
  //     } catch (error) {
  //       throw new Error(
  //         `Invalid trading pair: ${_trade.from}/${_trade.to || "USD"}. ${
  //           error instanceof Error ? error.message : String(error)
  //         }`
  //       );
  //     }

  //     // Auto-fetch current market price if not provided
  //     let openPrice: string;
  //     if (_trade.openPrice) {
  //       openPrice = _trade.openPrice;
  //     } else {
  //       try {
  //         console.log(
  //           `Auto-fetching current market price for ${_trade.from}/${
  //             _trade.to || "USD"
  //           }...`
  //         );
  //         openPrice = await getCurrentMidPrice(_trade.from, _trade.to || "USD");
  //         console.log(`Using current mid price: ${openPrice}`);
  //       } catch (error) {
  //         throw new Error(
  //           `Failed to fetch current market price for ${_trade.from}/${
  //             _trade.to || "USD"
  //           }: ${error instanceof Error ? error.message : String(error)}`
  //         );
  //       }
  //     }

  //     const walletClient = createWalletClient({
  //       account: account,
  //       chain: arbitrum,
  //       transport: http(),
  //     });

  //     const tradeArray = {
  //       collateral: parseUnits(_trade.collateral, 6),
  //       openPrice: parseUnits(openPrice, 18),
  //       tp: parseUnits(_trade.tp, 18),
  //       sl: parseUnits(_trade.sl, 18),
  //       trader: _trade.trader as `0x${string}`,
  //       leverage: Math.round(Number(_trade.leverage) * 100),
  //       pairIndex: pairIndex,
  //       index: Number(_trade.index ?? "0"),
  //       buy: _trade.buy ?? true,
  //     };

  //     const preparedTx = await walletClient.prepareTransactionRequest({
  //       to: TRADING_CONTRACT_ADDRESS,
  //       abi: TRADING_ABI,
  //       functionName: "openTrade",
  //       args: [tradeArray, _type, _slippage],
  //       gas: 800000n,
  //     });

  //     const serializedTx = serializeTransaction({
  //       ...preparedTx,
  //       data: encodeFunctionData({
  //         abi: TRADING_ABI,
  //         functionName: "openTrade",
  //         args: [tradeArray, _type, _slippage],
  //       }),
  //     } as any);

  //     const signedTx = await client.signTransaction(
  //       TRADING_ABI,
  //       serializedTx,
  //       this.chain,
  //       account.address
  //     );
  //     const hash = await walletClient.sendRawTransaction({
  //       serializedTransaction: signedTx as `0x${string}`,
  //     });

  //     const receipt = await this.publicClient.waitForTransactionReceipt({
  //       hash: hash,
  //     });

  //     if (receipt.status !== "success") {
  //       throw new Error(`Transaction failed with status: ${receipt.status}`);
  //     }

  //     return createSuccessResponse("Successfully opened trade", {
  //       hash: hash,
  //       trade: _trade,
  //       type: _type,
  //       slippage: _slippage,
  //       receipt: receipt,
  //     });
  //   } catch (error: any) {
  //     if (error.response?.data?.error) {
  //       return createErrorResponse(error.response.data.error);
  //     }
  //     return createErrorResponse(error);
  //   }
  // }

  configureServer(server: McpServer): void {
    registerHelloTool(server);
    registerHelloPrompt(server);
    registerHelloResource(server);
  }
}
