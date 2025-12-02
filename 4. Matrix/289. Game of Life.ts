function gameOfLife(board: number[][]): void {
  const r = board.length;
  const c = board[0].length;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let live = 0;

      for (const [dr, dc] of dirs) {
        const nr = i + dr;
        const nc = j + dc;

        if (nr >= 0 && nr < r && nc >= 0 && nc < c) {
          if (board[nr][nc] > 0) live++;
        }
      }

      if (board[i][j] === 1 && (live < 2 || live > 3)) {
        board[i][j] = 2;
      }

      if (board[i][j] === 0 && live === 3) {
        board[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === 2) board[i][j] = 0;
      if (board[i][j] === -1) board[i][j] = 1;
    }
  }
}
