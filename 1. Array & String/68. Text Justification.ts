function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let currWords: string[] = [];
  let currLenNotSpace = 0;

  for (const w of words) {
    if (currLenNotSpace + currWords.length + w.length > maxWidth) {
      result.push(formatLine(currWords, currLenNotSpace, maxWidth, false));
      currWords = [];
      currLenNotSpace = 0;
    }

    currWords.push(w);
    currLenNotSpace += w.length;
  }

  if (currWords.length) {
    result.push(formatLine(currWords, currLenNotSpace, maxWidth, true));
  }

  return result;
}

function formatLine(
  words: string[],
  letterLen: number,
  maxWidth: number,
  isLastLine: boolean
): string {
  const gaps = words.length - 1;
  const totalSpaces = maxWidth - letterLen;

  if (isLastLine || gaps === 0) {
    let line = words.join(" ");
    return line + " ".repeat(maxWidth - line.length);
  }

  const even = Math.floor(totalSpaces / gaps);
  const extra = totalSpaces % gaps;

  let line = "";
  for (let i = 0; i < gaps; i++) {
    line += words[i];
    line += " ".repeat(even + (i < extra ? 1 : 0));
  }
  line += words[words.length - 1];
  return line;
}
