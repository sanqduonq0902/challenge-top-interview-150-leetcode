function kadaneMax(nums: number[]): number {
  let curr = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    maxSum = Math.max(maxSum, curr);
  }

  return maxSum;
}

function kadaneMin(nums: number[]): number {
  let curr = nums[0];
  let minSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.min(nums[i], curr + nums[i]);
    minSum = Math.min(minSum, curr);
  }

  return minSum;
}

function maxSubarraySumCircular(nums: number[]): number {
  const max = kadaneMax(nums);

  if (max < 0) return max;

  const min = kadaneMin(nums);
  const total = nums.reduce((a, b) => a + b, 0);
  const maxCircle = total - min;

  return Math.max(max, maxCircle);
}
