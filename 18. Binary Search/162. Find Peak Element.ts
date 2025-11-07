function findPeakElement(nums: number[]): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }

  return left;
}
