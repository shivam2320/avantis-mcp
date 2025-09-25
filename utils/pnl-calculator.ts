import { PnLCalculationParams, PnLCalculationResult } from './types.js';

export function calculatePnL(params: PnLCalculationParams): PnLCalculationResult {
  const { isLong, entryPrice, currentPrice, size, leverage } = params;

  // Validate input parameters
  if (entryPrice <= 0) {
    throw new Error('Entry price must be greater than 0');
  }
  if (currentPrice <= 0) {
    throw new Error('Current price must be greater than 0');
  }
  if (size <= 0) {
    throw new Error('Position size must be greater than 0');
  }
  if (leverage <= 0) {
    throw new Error('Leverage must be greater than 0');
  }

  let percentChange: number;
  let pnl: number;

  if (isLong) {
    percentChange = ((currentPrice - entryPrice) / entryPrice) * 100 * leverage;
    pnl = size * (percentChange / 100);
  } else {
    percentChange = ((entryPrice - currentPrice) / entryPrice) * 100 * leverage;
    pnl = size * (percentChange / 100);
  }

  const isProfitable = pnl > 0;
  const pnlPercentage = (pnl / size) * 100;

  return {
    pnl,
    percentChange,
    isProfitable,
    pnlPercentage
  };
}

export function formatPnLResult(result: PnLCalculationResult, currency: string = '$'): string {
  const sign = result.pnl >= 0 ? '+' : '';
  const pnlFormatted = `${sign}${currency}${result.pnl.toFixed(2)}`;
  const percentFormatted = `${sign}${result.percentChange.toFixed(2)}%`;
  const pnlPercentFormatted = `${sign}${result.pnlPercentage.toFixed(2)}%`;
  
  return `PnL: ${pnlFormatted} (${percentFormatted} price change, ${pnlPercentFormatted} of position size)`;
}
