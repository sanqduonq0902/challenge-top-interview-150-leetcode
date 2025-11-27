function getMinimumDifference(root: TreeNode | null): number {
  let min: number = Infinity;
  let prev: null | number = null;

  function inorder(node: TreeNode | null): void {
    if (!node) return;

    inorder(node.left);

    if (prev !== null) {
      min = Math.min(min, node.val - prev);
    }

    prev = node.val;

    inorder(node.right);
  }

  inorder(root);
  return min;
}
