function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let isLeft: boolean = true;

  while (queue.length) {
    const size: number = queue.length;
    const level: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!isLeft) level.reverse();
    result.push(level);
    isLeft = !isLeft;
  }

  return result;
}
