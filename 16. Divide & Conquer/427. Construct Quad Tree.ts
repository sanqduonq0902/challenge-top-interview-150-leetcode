function construct(grid: number[][]): _Node | null {
  const dfs = (rows: number, cols: number, size: number): _Node | null => {
    if (size === 1) {
      return new _Node(grid[rows][cols] ? true : false, true);
    }

    const mid = Math.floor(size / 2);

    const topLeft = dfs(rows, cols, mid);
    const topRight = dfs(rows, cols + mid, mid);
    const bottomLeft = dfs(rows + mid, cols, mid);
    const bottomRight = dfs(rows + mid, cols + mid, mid);

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf
    ) {
      if (topLeft.val && topRight.val && bottomLeft.val && bottomRight.val) {
        return new _Node(true, true);
      }
      if (
        !topLeft.val &&
        !topRight.val &&
        !bottomLeft.val &&
        !bottomRight.val
      ) {
        return new _Node(false, true);
      }
    }

    return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
  };

  return dfs(0, 0, grid.length);
}
