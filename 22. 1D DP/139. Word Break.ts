function wordBreak(s: string, wordDict: string[]): boolean {
  const setArr = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && setArr.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
