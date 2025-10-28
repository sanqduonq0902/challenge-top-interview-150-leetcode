function maxProfit(prices: number[]): number {
  const n = prices.length;
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}
