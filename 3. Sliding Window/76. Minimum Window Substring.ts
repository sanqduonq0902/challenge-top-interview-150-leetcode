function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  const window = new Map<string, number>();
  const n = s.length;
  let left = 0,
    right = 0;
  let valid = 0;
  let minLength = Infinity;
  let start = 0;

  for (const str of t) {
    need.set(str, (need.get(str) || 0) + 1);
  }

  while (right < n) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (need.get(c) === window.get(c)) valid++;
    }

    while (valid === need.size) {
      if (right - left < minLength) {
        start = left;
        minLength = right - left;
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, (window.get(d) || 0) - 1);
      }
    }
  }

  return minLength === Infinity ? "" : s.slice(start, start + minLength);
}
