function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k %= n;

  function reverse(left: number, right: number) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}
