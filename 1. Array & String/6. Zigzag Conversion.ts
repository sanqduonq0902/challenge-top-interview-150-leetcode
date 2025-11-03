function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let currRow = -1;
  let checkPath = true;
  const arr = new Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    currRow += checkPath ? 1 : -1;
    arr[currRow] += s[i];

    if (currRow === numRows - 1) {
      checkPath = false;
    } else if (currRow === 0) {
      checkPath = true;
    }
  }

  return arr.join("");
}
