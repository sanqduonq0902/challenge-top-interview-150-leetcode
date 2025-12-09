function insert(intervals: number[][], newInterval: number[]): number[][] {
  const answer: number[][] = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    answer.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  answer.push(newInterval);

  while (i < intervals.length) {
    answer.push(intervals[i]);
    i++;
  }

  return answer;
}
