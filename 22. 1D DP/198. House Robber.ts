function rob(nums: number[]): number {
  let prev1 = 0;
  let prev2 = 0;

  for (const num of nums) {
    const max = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = max;
  }

  return prev1;
}
