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

    for (let ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.root;

    for (let ch of word) {
      if (!node.children.has(ch)) {
        return false;
      }
      node = node.children.get(ch)!;
    }

    return node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;

    for (let ch of prefix) {
      if (!node.children.has(ch)) {
        return false;
      }
      node = node.children.get(ch)!;
    }

    return true;
  }
}
