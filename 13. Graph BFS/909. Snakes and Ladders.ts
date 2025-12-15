function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const target = n * n;

  const visited = new Array(target + 1).fill(false);
  const queue: [number, number][] = [[1, 0]];
  visited[1] = true;

  const getRC = (num: number): [number, number] => {
    const r = Math.floor((num - 1) / n);
    const c = (num - 1) % n;
    const row = n - 1 - r;

    if (r % 2 === 0) {
      return [row, c];
    } else {
      return [row, n - 1 - c];
    }
  };

  while (queue.length) {
    const [cell, steps] = queue.shift()!;

    if (cell === target) return steps;

    for (let dice = 1; dice <= 6; dice++) {
      let next = cell + dice;
      if (next > target) break;

      const [r, c] = getRC(next);
      if (board[r][c] !== -1) {
        next = board[r][c];
      }

      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}
