function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let arrow = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, finish] = points[i];

    if (start > end) {
      arrow++;
      end = finish;
    }
  }

  return arrow;
}
