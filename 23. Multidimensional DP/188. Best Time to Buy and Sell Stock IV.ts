function maxProfit(k: number, prices: number[]): number {
    const n = prices.length;
    if (n === 0) return 0;

    if (k >= Math.floor(n / 2)) {
        let profit = 0;
        for (let i = 1; i < n; i++) {   
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }

    const buy = new Array(k + 1).fill(-Infinity);
    const sell = new Array(k + 1).fill(0);

    for (let i = 1; i <= k; i++) {
        buy[i] = -prices[0];
    }

    for (let i = 1; i < n; i++) {
        const price = prices[i];
        for (let t = 1; t <= k; t++) {
            buy[t] = Math.max(buy[t], sell[t - 1] - price);
            sell[t] = Math.max(sell[t], buy[t] + price);
        }
    }

    return sell[k];
};