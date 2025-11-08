function twoSum(nums: number[], target: number): number[] {
  let n = nums.length;
  const mapArr = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    let need = target - nums[i];

    if (mapArr.has(need)) {
      const val = mapArr.get(need)!;
      return [val, i];
    }

    mapArr.set(nums[i], i);
  }

  throw new Error("No pair found");
}
