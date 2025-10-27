function majorityElement(nums: number[]): number {
  const mapArr = new Map<number, number>();
  let maxFreq = 0;
  let val = 0;

  for (const num of nums) {
    const freq = (mapArr.get(num) || 0) + 1;
    mapArr.set(num, freq);

    if (freq > maxFreq) {
      maxFreq = freq;
      val = num;
    }
  }

  return val;
}
