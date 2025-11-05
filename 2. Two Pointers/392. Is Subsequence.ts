function isSubsequence(s: string, t: string): boolean {
  let slow = 0;
  let fast = 0;

  while (fast < t.length) {
    if (s[slow] === t[fast]) {
      slow++;
    }
    fast++;
  }

  return slow === s.length;
}
