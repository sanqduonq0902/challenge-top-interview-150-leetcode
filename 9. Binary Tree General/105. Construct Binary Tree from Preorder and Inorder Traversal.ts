function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const mapArr = new Map<number, number>();
  inorder.forEach((val, i) => mapArr.set(val, i));

  let preIndex = 0;

  function dfs(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);

    const index = mapArr.get(rootVal);
    root.left = dfs(left, index! - 1);
    root.right = dfs(index! + 1, right);

    return root;
  }

  return dfs(0, inorder.length - 1);
}
