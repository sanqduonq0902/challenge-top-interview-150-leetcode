function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const set = new Set<string>(wordList);
    if (!set.has(endWord)) return 0;

    const n = beginWord.length;
    const map = new Map<string, string[]>();

    const build = (word: string) => {
        for (let i = 0; i < n; i++) {
            const p = word.slice(0, i) + '*' + word.slice(i + 1);
            if (!map.has(p)) map.set(p, []);
            map.get(p)!.push(word);
        }
    };

    for (let w of wordList) build(w);
    build(beginWord);

    const queue: [string, number][] = [[beginWord, 1]];
    const visited = new Set<string>([beginWord]);

    while (queue.length) {
        const [word, level] = queue.shift()!;

        for (let i = 0; i < n; i++) {
            const p = word.slice(0, i) + '*' + word.slice(i + 1);
            const neighbor = map.get(p) || [];

            for (const next of neighbor) {
                if (next === endWord) return level + 1;

                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push([next, level + 1]);
                }
            }

        }
    }

    return 0;
};  