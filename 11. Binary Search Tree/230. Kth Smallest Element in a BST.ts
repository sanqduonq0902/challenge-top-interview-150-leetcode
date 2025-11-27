function kthSmallest(root: TreeNode | null, k: number): number {
  let arr: number[] = [];

  function inorder(node: TreeNode | null): void {
    if (!node) return;

    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return arr[k - 1];
}
