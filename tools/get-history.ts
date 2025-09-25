import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpLogger } from "../utils/logger.js";
import {
  createErrorResponse,
  createSuccessResponse,
  LOG_LEVELS,
} from "../utils/types.js";
import { AvantisMCP } from "../client.js";
import { GetHistorySchema } from "../schema/index.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerGetHistoryTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("📈 Registering get history tools...");

  server.tool(
    "get_history",
    "Get the latest trading history for a user's wallet address. Returns recent closed positions with details like PnL, leverage, fees, and trade information from the Avantis API.",
    GetHistorySchema,
    async ({ address, limit }) => {
      try {
        logger.toolCalled("get_history", { address, limit });

        // Validate address format
        if (!address || !address.match(/^0x[a-fA-F0-9]{40}$/)) {
          throw new Error("Invalid wallet address format. Expected format: 0x followed by 40 hexadecimal characters");
        }

        // Fetch trading history from Avantis API
        const historyData = await avantisMCP.getUserTradingHistory(address, limit);

        // Transform the data to a more readable format
        const formattedHistory = historyData.portfolio.map((position: any) => {
          const tradeData = position.event.args.t;
          const feeInfo = position.event.args._feeInfo;
          
          return {
            id: position._id,
            timestamp: position.timeStamp,
            trade_details: {
              pair_index: tradeData.pairIndex,
              direction: tradeData.buy ? "Long" : "Short",
              leverage: tradeData.leverage,
              position_size_usdc: tradeData.positionSizeUSDC,
              initial_pos_token: tradeData.initialPosToken,
              open_price: tradeData.openPrice,
              close_price: position.event.args.price,
              take_profit: tradeData.tp,
              stop_loss: tradeData.sl,
              trader: tradeData.trader,
              index: tradeData.index
            },
            pnl: {
              net_pnl: position._mapped_netPnl,
              gross_pnl: position._grossPnl,
              usdc_sent_to_trader: position.event.args.usdcSentToTrader
            },
            fees: {
              closing_fee: feeInfo.closingFee || 0,
              rollover_fee: feeInfo.r || 0,
              loss_protection: feeInfo.lossProtection || 0,
              keeper_fee: feeInfo.keeperFee || 0,
              liquidation_fee: feeInfo.liquidationFee || 0,
              actual_close_fee: feeInfo.actualCloseFee || 0
            }
          };
        });

        const responseData = {
          address: address,
          total_positions: formattedHistory.length,
          requested_limit: limit,
          positions: formattedHistory,
          api_success: historyData.success,
          timestamp: new Date().toISOString()
        };

        logger.toolCompleted("get_history");
        return createSuccessResponse(
          `✅ Retrieved ${formattedHistory.length} trading positions for address ${address}`,
          responseData
        );
      } catch (error) {
        return handleToolError("get_history", error);
      }
    }
  );

  logger.info("✅ Get history tools registered successfully");
}

/**
 * Centralized error handling for get history tools
 */
function handleToolError(toolName: string, error: unknown): CallToolResult {
  logger.error("Get history tool execution failed", {
    tool: toolName,
    error: error instanceof Error ? error.message : String(error),
  });

  return createErrorResponse(error);
}
