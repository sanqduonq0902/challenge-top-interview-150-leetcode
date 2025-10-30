function productExceptSelf(nums: number[]): number[] {
  const arr = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    arr[i] *= prefix;
    arr[nums.length - 1 - i] *= postfix;

    prefix *= nums[i];
    postfix *= nums[nums.length - 1 - i];
  }

  return arr;
}
