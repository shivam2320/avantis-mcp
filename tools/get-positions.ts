import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { McpLogger } from "../utils/logger.js";
import {
  createErrorResponse,
  createSuccessResponse,
  LOG_LEVELS,
} from "../utils/types.js";
import { AvantisMCP } from "../client.js";
import { GetPositionsSchema } from "../schema/index.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerGetPositionsTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("📊 Registering get positions tools...");

  server.tool(
    "get_positions",
    "Get ongoing trades and pending limit orders for a trader. Returns active positions and pending orders from the Multicall contract. If no trader address is provided, uses the authenticated user's address.",
    GetPositionsSchema,
    async ({ trader }) => {
      try {
        logger.toolCalled("get_positions", { trader });

        // Get positions using the AvantisMCP client
        const result = await avantisMCP.getPositions(trader);

        logger.toolCompleted("get_positions");
        return result;
      } catch (error) {
        return handleToolError("get_positions", error);
      }
    }
  );

  logger.info("✅ Get positions tools registered successfully");
}

/**
 * Centralized error handling for get positions tools
 */
function handleToolError(toolName: string, error: unknown): CallToolResult {
  logger.error("Get positions tool execution failed", {
    tool: toolName,
    error: error instanceof Error ? error.message : String(error),
  });

  return createErrorResponse(error);
}
