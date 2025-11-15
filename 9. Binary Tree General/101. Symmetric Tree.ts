function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const isMirror = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    return (
      a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)
    );
  };

  return isMirror(root.left, root.right);
}
