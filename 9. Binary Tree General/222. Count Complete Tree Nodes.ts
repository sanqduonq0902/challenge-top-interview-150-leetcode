function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let count = 1;
  if (root.left) count += countNodes(root.left);
  if (root.right) count += countNodes(root.right);

  return count;
}
