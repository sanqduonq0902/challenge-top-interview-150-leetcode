function romanToInt(s: string): number {
  const mapArr = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const n = s.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const curr = mapArr.get(s[i])!;
    const next = mapArr.get(s[i + 1]) ?? 0;

    if (curr >= next) {
      result += curr;
    } else {
      result -= curr;
    }
  }

  return result;
}
