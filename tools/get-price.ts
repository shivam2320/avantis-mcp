import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpLogger } from "../utils/logger.js";
import {
  createErrorResponse,
  createSuccessResponse,
  LOG_LEVELS,
} from "../utils/types.js";
import { AvantisMCP } from "../client.js";
import { GetAssetPriceSchema } from "../schema/index.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerGetPriceTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("💰 Registering get price tools...");

  server.tool(
    "get_price",
    "Get the current market price for any supported asset pair through Pyth oracle. Returns real-time price data for trading pairs like BTC/USD, ETH/USD, etc. The asset parameter should be in the format 'ASSET/USD' (e.g., 'BTC/USD', 'ETH/USD').",
    GetAssetPriceSchema,
    async ({ asset }) => {
      try {
        logger.toolCalled("get_price", { asset });

        // Parse the asset parameter to extract from and to currencies
        const [from, to = "USD"] = asset.split("/");
        
        if (!from) {
          throw new Error("Invalid asset format. Expected format: 'ASSET/USD' (e.g., 'BTC/USD')");
        }

        // Get the current mid price using the existing Pyth integration
        const price = await avantisMCP.getCurrentMidPrice(from.toUpperCase(), to.toUpperCase());
        
        // Get available trading pairs for reference
        const availablePairs = avantisMCP.getAvailableTradingPairs();

        const priceData = {
          asset: asset.toUpperCase(),
          from: from.toUpperCase(),
          to: to.toUpperCase(),
          price: price,
          priceFormatted: parseFloat(price).toFixed(8),
          source: "Pyth Oracle",
          timestamp: new Date().toISOString(),
          availablePairs: availablePairs,
        };

        logger.toolCompleted("get_price");
        return createSuccessResponse(
          `✅ Retrieved price for ${asset.toUpperCase()}: $${parseFloat(price).toFixed(8)}`,
          priceData
        );
      } catch (error) {
        return handleToolError("get_price", error);
      }
    }
  );

  logger.info("✅ Get price tools registered successfully");
}

/**
 * Centralized error handling for get price tools
 */
function handleToolError(toolName: string, error: unknown): CallToolResult {
  logger.error("Get price tool execution failed", {
    tool: toolName,
    error: error instanceof Error ? error.message : String(error),
  });

  return createErrorResponse(error);
}


