function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    let currMax = node.val + left + right;
    max = Math.max(max, currMax);

    return node.val + Math.max(left, right);
  }

  dfs(root);
  return max;
}
