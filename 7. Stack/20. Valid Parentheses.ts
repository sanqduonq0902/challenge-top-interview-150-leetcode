function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const str of s) {
    if (map.has(str)) {
      const top = stack.pop();
      const value = map.get(str);
      if (top !== value) {
        return false;
      }
    } else {
      stack.push(str);
    }
  }

  return !stack.length;
}
