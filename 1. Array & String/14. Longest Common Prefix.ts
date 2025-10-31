class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;

    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }

  getLongestPrefix(): string {
    let prefix = "";
    let node = this.root;

    while (true) {
      const keys = Array.from(node.children.keys());

      if (keys.length !== 1) break;

      if (node.isEnd) break;

      const ch = keys[0];
      prefix += ch;
      node = node.children.get(ch)!;
    }

    return prefix;
  }
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  const trie = new Trie();

  for (const ch of strs) {
    trie.insert(ch);
  }

  return trie.getLongestPrefix();
}
