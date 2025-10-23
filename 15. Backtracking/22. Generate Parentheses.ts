function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtracking(path: string, open: number, close: number) {
    if (path.length === 2 * n) {
      result.push(path);
      return;
    }

    if (open < n) {
      backtracking(path + "(", open + 1, close);
    }

    if (close < open) {
      backtracking(path + ")", open, close + 1);
    }
  }

  backtracking("", 0, 0);

  return result;
}
