function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtracking(path: number[], used: boolean[]) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;

      backtracking(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtracking([], Array(nums.length).fill(false));

  return result;
}
