function maxProfit(prices: number[]): number {
  const n = prices.length;
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
