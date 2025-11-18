function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;

  const inorderIndexMap = new Map<number, number>();
  inorder.forEach((val, idx) => inorderIndexMap.set(val, idx));

  let postIndex = postorder.length - 1;

  function helper(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const rootVal = postorder[postIndex--];
    const root = new TreeNode(rootVal);
    const inorderIndex = inorderIndexMap.get(rootVal)!;

    root.right = helper(inorderIndex + 1, right);
    root.left = helper(left, inorderIndex - 1);

    return root;
  }

  return helper(0, inorder.length - 1);
}
