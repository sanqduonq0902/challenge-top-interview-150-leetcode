function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const n = nums.length;
  const set = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) set.delete(nums[i - k]);
  }

  return false;
}
