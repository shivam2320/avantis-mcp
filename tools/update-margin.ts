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
import { ModifyTradeSchema } from "../schema/index.js";

const logger = new McpLogger("avantis-mcp", LOG_LEVELS.INFO);

export function registerUpdateMarginTools(
  server: McpServer,
  avantisMCP: AvantisMCP
): void {
  logger.info("📝 Registering update margin tools...");

  server.tool(
    "update_margin",
    "Modify an existing trading position by adding or withdrawing collateral. Specify the trading pair, position index, amount in USDC, and type (0 to add collateral, 1 to withdraw collateral).",
    ModifyTradeSchema,
    async ({ from, to, _index, _amount, _type }) => {
      try {
        logger.toolCalled("update_margin", {
          from,
          to,
          _index,
          _amount,
          _type,
        });

        const result = await avantisMCP.updateMargin({
          from,
          to,
          _index,
          _amount,
          _type,
        });

        logger.toolCompleted("update_margin");
        return result;
      } catch (error) {
        return handleToolError("update_margin", error);
      }
    }
  );

  logger.info("✅ All update margin tools registered successfully");
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
