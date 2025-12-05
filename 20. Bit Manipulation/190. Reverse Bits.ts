function reverseBits(n: number): number {
  const str = n.toString(2).padStart(32, "0");
  const reverse = str.split("").reverse().join("");
  return parseInt(reverse, 2);
}
