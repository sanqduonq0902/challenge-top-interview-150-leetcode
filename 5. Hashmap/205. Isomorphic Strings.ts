function isIsomorphic(s: string, t: string): boolean {
  const n = s.length;
  const map = new Map<string, string>();
  const set = new Set<string>();

  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      const value = map.get(s[i]);
      if (value !== t[i]) return false;
    } else {
      if (set.has(t[i])) return false;
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }

  return true;
}
