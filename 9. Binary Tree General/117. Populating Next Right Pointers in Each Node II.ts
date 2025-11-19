function connect(root: _Node | null): _Node | null {
  if (!root) return null;

  const queue: _Node[] = [root];

  while (queue.length) {
    const n = queue.length;
    let prev = null;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();

      if (prev) {
        prev.next = node;
      }
      prev = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (prev) {
      prev.next = null;
    }
  }

  return root;
}
