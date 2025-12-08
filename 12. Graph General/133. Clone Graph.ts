class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (node === null) return null;

  const visited = new Map<_Node, _Node>();

  const dfs = (curr: _Node): _Node => {
    if (visited.has(curr)) return visited.get(curr)!;

    const copy = new _Node(curr.val);
    visited.set(curr, copy);

    for (let neighbor of curr.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return dfs(node);
}
