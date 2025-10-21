function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  const mappingPhone: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  function backtracking(start: number, path: string[]) {
    if (path.length === digits.length) {
      result.push(path.join(""));
      return;
    }

    const phone = mappingPhone[digits[start]];

    for (const c of phone) {
      path.push(c);
      backtracking(start + 1, path);
      path.pop();
    }
  }

  backtracking(0, []);

  return result;
}
