function longestConsecutive(nums: number[]): number {
  let set = new Set<number>(nums);
  let maxLen = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 0;
      while (set.has(num + len)) {
        len += 1;
      }
      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
}
