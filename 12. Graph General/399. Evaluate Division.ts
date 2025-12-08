function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = new Map<string, [string, number][]>();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const v = values[i];

    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a)!.push([b, v]);
    graph.get(b)!.push([a, 1 / v]);
  }

  function dfs(start: string, end: string, visited: Set<string>): number {
    if (!graph.has(start)) return -1;

    if (start === end) return 1;

    visited.add(start);

    for (const [next, weight] of graph.get(start)!) {
      if (visited.has(next)) continue;

      const res = dfs(next, end, visited);

      if (res !== -1) {
        return weight * res;
      }
    }

    return -1;
  }

  const result: number[] = [];

  for (const [a, b] of queries) {
    const visited = new Set<string>();
    result.push(dfs(a, b, visited));
  }

  return result;
}
