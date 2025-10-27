function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let slow = 0;

  for (let fast = 0; fast < n; fast++) {
    if (nums[fast] === nums[slow]) continue;
    slow++;
    nums[slow] = nums[fast];
  }

  return slow + 1;
}
