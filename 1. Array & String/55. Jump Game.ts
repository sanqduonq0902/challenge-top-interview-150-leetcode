function canJump(nums: number[]): boolean {
  const n = nums.length;
  let maxJump = 0;

  for (let i = 0; i < n; i++) {
    if (i > maxJump) return false;

    maxJump = Math.max(maxJump, nums[i] + i);

    if (maxJump >= n - 1) {
      return true;
    }
  }

  return false;
}
