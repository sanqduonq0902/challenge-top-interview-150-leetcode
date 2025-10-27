function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let slow = 0;
  let count = 1;

  for (let fast = 1; fast < n; fast++) {
    if (nums[fast] === nums[fast - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}
