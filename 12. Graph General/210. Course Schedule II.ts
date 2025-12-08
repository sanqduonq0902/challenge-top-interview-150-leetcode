function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (let [cour, pre] of prerequisites) {
    graph[pre].push(cour);
  }

  const state = new Array(numCourses).fill(0);
  let hasCycle = false;
  const order: number[] = [];

  function dfs(node: number): void {
    if (state[node] === 1) {
      hasCycle = true;
      return;
    }

    if (state[node] === 2) return;

    state[node] = 1;

    for (let next of graph[node]) {
      dfs(next);
      if (hasCycle) return;
    }

    state[node] = 2;
    order.push(node);
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0) dfs(i);
    if (hasCycle) return [];
  }

  return order.reverse();
}
