function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];

      if (val === ".") continue;

      const boxInd = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val)) return false;
      if (cols[c].has(val)) return false;
      if (boxes[boxInd].has(val)) return false;

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxInd].add(val);
    }
  }

  return true;
}
