function maxSubArray(nums: number[]): number {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
