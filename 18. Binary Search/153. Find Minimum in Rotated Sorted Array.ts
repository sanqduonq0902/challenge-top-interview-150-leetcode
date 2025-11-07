function findMin(nums: number[]): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid - 1;
  }

  return nums[left];
}
