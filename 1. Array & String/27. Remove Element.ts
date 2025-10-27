function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  let slow = 0;

  for (let fast = 0; fast < n; fast++) {
    if (nums[fast] === val) continue;
    nums[slow] = nums[fast];
    slow++;
  }

  return slow;
}
