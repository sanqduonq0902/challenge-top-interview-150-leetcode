function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let left = 0;
  let maxLen = 0;
  const set = new Set();

  for (let right = 0; right < n; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
