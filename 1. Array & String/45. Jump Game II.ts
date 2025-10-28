function jump(nums: number[]): number {
  const n = nums.length;
  let maxJump = 0;
  let curr = 0;
  let step = 0;

  for (let i = 0; i < n - 1; i++) {
    maxJump = Math.max(maxJump, nums[i] + i);

    if (i === curr) {
      step++;
      curr = maxJump;

      if (curr >= n - 1) break;
    }
  }

  return step;
}
