function sortedArrayToBST(nums: number[]): TreeNode | null {
  function dfs(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = dfs(left, mid - 1);
    root.right = dfs(mid + 1, right);

    return root;
  }

  return dfs(0, nums.length - 1);
}
