function hIndex(citations: number[]): number {
  return citations.sort((a, b) => b - a).filter((val, ind) => val >= ind + 1)
    .length;
}
