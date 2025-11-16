function sumNumbers(root: TreeNode | null): number {
  return dfs(root, 0);
}

function dfs(node: TreeNode | null, sum: number): number {
  if (!node) return 0;

  sum = sum * 10 + node.val;

  if (!node.left && !node.right) {
    return sum;
  }

  return dfs(node.left, sum) + dfs(node.right, sum);
}
