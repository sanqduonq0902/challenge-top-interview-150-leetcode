function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let result: number[] = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      result.push(matrix[j][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        result.push(matrix[j][left]);
      }
      left++;
    }
  }

  return result;
}
