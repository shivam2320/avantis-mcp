import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { type AuthContextError } from "@osiris-ai/sdk";
import { McpLogger } from "../utils/logger.js";
import {
  createAuthErrorResponse,
  createErrorResponse,
  createSuccessResponse,
  LOG_LEVELS,
} from "../utils/types.js";
import { AvantisMCP } from "../client.js";
import { UpdateTpAndSLSchema } from "../schema/index.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerUpdateTpAndSLTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("📝 Registering update TP and SL tools...");

  server.tool(
    "update_tp_sl",
    "Update the take profit (TP) and stop loss (SL) levels for an existing trading position. Specify the trading pair, position index, and new TP/SL price levels.",
    UpdateTpAndSLSchema,
    async ({ from, to, _index, _newTP, _newSL }) => {
      try {
        logger.toolCalled("update_tp_sl", {
          from,
          to,
          _index,
          _newTP,
          _newSL,
        });

        const result = await avantisMCP.updateTpAndSl({
          from,
          to,
          _index,
          _newTP,
          _newSL,
        });

        logger.toolCompleted("update_tp_sl");
        return result;
      } catch (error) {
        return handleToolError("update_tp_sl", error);
      }
    }
  );

  logger.info("✅ All update TP and SL tools registered successfully");
}

/**
 * Centralized error handling for all tools
 */
function handleToolError(toolName: string, error: unknown): CallToolResult {
  if ((error as AuthContextError).authorizationUrl) {
    const authError = error as AuthContextError;
    logger.error("Authentication required", {
      tool: toolName,
      authUrl: authError.authorizationUrl,
    });

    return createAuthErrorResponse(
      `Google authentication required for ${toolName}. Please visit: ${authError.authorizationUrl}`,
      {
        authorizationUrl: authError.authorizationUrl,
        availableServices: authError.availableServices,
        missingService: authError.missingService,
        deploymentId: authError.deploymentId,
      }
    );
  }

  logger.error("Tool execution failed", {
    tool: toolName,
    error: error instanceof Error ? error.message : String(error),
  });

  return createErrorResponse(error);
}
