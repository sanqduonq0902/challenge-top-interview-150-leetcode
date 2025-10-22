function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  function backtracking(start: number, path: number[]) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(i + 1, path);
      path.pop();
    }
  }

  backtracking(1, []);

  return result;
}
