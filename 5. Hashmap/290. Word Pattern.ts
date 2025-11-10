function wordPattern(pattern: string, s: string): boolean {
  const arr = s.split(" ");
  if (pattern.length !== arr.length) return false;

  const n = pattern.length;
  const map = new Map<string, string>();
  const set = new Set<string>();

  for (let i = 0; i < n; i++) {
    if (map.has(pattern[i])) {
      const value = map.get(pattern[i]);
      if (value !== arr[i]) return false;
    } else {
      if (set.has(arr[i])) return false;
      map.set(pattern[i], arr[i]);
      set.add(arr[i]);
    }
  }

  return true;
}
