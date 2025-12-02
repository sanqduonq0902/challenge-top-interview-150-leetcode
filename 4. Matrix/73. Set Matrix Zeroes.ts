function setZeroes(matrix: number[][]): void {
  const r = matrix.length;
  const c = matrix[0].length;

  const rows = new Set<number>();
  const cols = new Set<number>();

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
