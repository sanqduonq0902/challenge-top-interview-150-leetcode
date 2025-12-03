class TrieNode {
  children: Map<string, TrieNode>;
  word: string | null;

  constructor() {
    this.children = new Map();
    this.word = null;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(words: string): void {
    let node = this.root;

    for (let w of words) {
      if (!node.children.has(w)) {
        node.children.set(w, new TrieNode());
      }
      node = node.children.get(w)!;
    }
    node.word = words;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const trie = new Trie();
  for (let w of words) trie.insert(w);

  const result: string[] = [];
  const m = board.length;
  const n = board[0].length;

  function dfs(r: number, c: number, node: TrieNode) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;

    const char = board[r][c];
    if (char === "#" || !node.children.has(char)) return;

    const nextNode = node.children.get(char)!;

    if (nextNode.word !== null) {
      result.push(nextNode.word);
      nextNode.word = null;
    }

    board[r][c] = "#";

    dfs(r + 1, c, nextNode);
    dfs(r - 1, c, nextNode);
    dfs(r, c + 1, nextNode);
    dfs(r, c - 1, nextNode);

    board[r][c] = char;

    if (nextNode.children.size === 0) {
      node.children.delete(char);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie.root);
    }
  }

  return result;
}
