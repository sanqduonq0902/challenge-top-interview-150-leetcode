function totalNQueens(n: number): number {
    let count = 0;

    const cols = new Set<number>();
    const mainDiagonal = new Set<number>();
    const antiDiagonal = new Set<number>();

    function backtracking(rows: number): void {
        if (rows === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || mainDiagonal.has(rows - col) || antiDiagonal.has(rows + col)) continue;

            cols.add(col);
            mainDiagonal.add(rows - col);
            antiDiagonal.add(rows + col);

            backtracking(rows + 1);

            cols.delete(col);
            mainDiagonal.delete(rows - col);
            antiDiagonal.delete(rows + col);
        }
    }

    backtracking(0);

    return count;
};