function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [cour, pre] of prerequisites) {
    graph[cour].push(pre);
  }

  const state = new Array(numCourses).fill(0);

  function dfs(node: number): boolean {
    if (state[node] === 1) return false;

    if (state[node] === 2) return true;

    state[node] = 1;

    for (let next of graph[node]) {
      if (!dfs(next)) return false;
    }

    state[node] = 2;

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}
