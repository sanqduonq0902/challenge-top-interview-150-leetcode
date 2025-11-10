function isAnagram(s: string, t: string): boolean {
  const arr = new Array(26).fill(0);
  const n = s.length;

  if (n !== t.length) return false;

  for (let i = 0; i < n; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return arr.every((x) => x === 0);
}
