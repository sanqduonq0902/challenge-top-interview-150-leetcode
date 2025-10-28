function lengthOfLastWord(s: string): number {
  const str = s.trim().split(" ");
  const result = str[str.length - 1];

  return result.length;
}
