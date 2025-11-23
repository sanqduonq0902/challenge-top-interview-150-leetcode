function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const levelValues: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      levelValues.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    const sum = levelValues.reduce((acc, x) => acc + x, 0);
    const avg = sum / levelValues.length;

    result.push(avg);
  }

  return result;
}
