import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpLogger } from "../utils/logger.js";
import {
  createErrorResponse,
  createSuccessResponse,
  LOG_LEVELS,
} from "../utils/types.js";
import { AvantisMCP } from "../client.js";
import { pairsData } from "../utils/pairs-data.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerGetPairsTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("📊 Registering get pairs tools...");

  server.tool(
    "get_pairs",
    "Get comprehensive data for all available trading pairs including symbol, asset type, open status, leverages, pair index, fees, and open interest. Returns detailed information about all supported trading pairs on the platform.",
    {},
    async () => {
      try {
        logger.toolCalled("get_pairs", {});

        // Transform pairs data to include all required fields
        const pairsInfo = Object.entries(pairsData).map(([pairIndex, pairData]: [string, any]) => {
          return {
            symbol: pairData.feed?.attributes?.symbol || `${pairData.from}/${pairData.to}`,
            asset_type: pairData.feed?.attributes?.asset_type || "Unknown",
            is_open: pairData.feed?.attributes?.is_open || false,
            leverages: {
              min: pairData.leverages?.minLeverage || 1,
              max: pairData.leverages?.maxLeverage || 1,
              pnl_min: pairData.leverages?.pnlMinLeverage || 1,
              pnl_max: pairData.leverages?.pnlMaxLeverage || 1
            },
            pair_index: parseInt(pairIndex),
            open_fee: pairData.openFeeP || 0,
            close_fee: pairData.closeFeeP || 0,
            funding_fee: {
              long: pairData.marginFee?.long || 0,
              short: pairData.marginFee?.short || 0
            },
            open_interest: {
              long: pairData.openInterest?.long || 0,
              short: pairData.openInterest?.short || 0,
              total: pairData.pairOI || 0,
              max: pairData.pairMaxOI || 0
            },
            // Additional useful information
            from: pairData.from,
            to: pairData.to,
            spread: pairData.spreadP || 0,
            price_impact_multiplier: pairData.priceImpactMultiplier || 1,
            group_index: pairData.groupIndex || 0,
            fee_index: pairData.feeIndex || 0
          };
        });

        const responseData = {
          total_pairs: pairsInfo.length,
          pairs: pairsInfo,
          timestamp: new Date().toISOString()
        };

        logger.toolCompleted("get_pairs");
        return createSuccessResponse(
          `✅ Retrieved data for ${pairsInfo.length} trading pairs`,
          responseData
        );
      } catch (error) {
        return handleToolError("get_pairs", error);
      }
    }
  );

  logger.info("✅ Get pairs tools registered successfully");
}

/**
 * Centralized error handling for get pairs tools
 */
function handleToolError(toolName: string, error: unknown): CallToolResult {
  logger.error("Get pairs tool execution failed", {
    tool: toolName,
    error: error instanceof Error ? error.message : String(error),
  });

  return createErrorResponse(error);
}
