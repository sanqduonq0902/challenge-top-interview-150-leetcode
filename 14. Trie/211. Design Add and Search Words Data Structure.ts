class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class WordDictionary {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;

    for (let ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    const dfs = (node: TrieNode, index: number): boolean => {
      if (index === word.length) return node.isEnd;

      const ch = word[index];

      if (ch !== ".") {
        const next = node.children.get(ch);
        if (!next) return false;
        return dfs(next, index + 1);
      }

      for (let children of node.children.values()) {
        if (dfs(children, index + 1)) {
          return true;
        }
      }

      return false;
    };

    return dfs(this.root, 0);
  }
}
