class BSTIterator {
  private stack: TreeNode[];

  constructor(root: TreeNode | null) {
    this.stack = [];
    let curr = root;
    while (curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
  }

  next(): number {
    let node = this.stack.pop();
    if (node.right) {
      let curr = node.right;
      while (curr) {
        this.stack.push(curr);
        curr = curr.left;
      }
    }

    return node.val;
  }

  hasNext(): boolean {
    return this.stack.length !== 0;
  }
}
