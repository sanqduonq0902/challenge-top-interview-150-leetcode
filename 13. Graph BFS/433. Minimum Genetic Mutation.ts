function minMutation(startGene: string, endGene: string, bank: string[]): number {
    if (startGene === endGene) return 0;

    const set = new Set(bank);
    if (!set.has(endGene)) return -1;

    const genes = ['A', 'C', 'G', 'T'];
    const queue: [string, number][] = [[startGene, 0]];
    const visited = new Set<string>([startGene]);

    while (queue.length) {
        const [curr, steps] = queue.shift()!;

        for (let i = 0; i < curr.length; i++) {
            for (const g of genes) {
                if (g === curr[i]) continue;

                const newMutation = curr.slice(0, i) + g + curr.slice(i + 1);

                if (newMutation === endGene) return steps + 1;

                if (set.has(newMutation) && !visited.has(newMutation)) {
                    visited.add(newMutation);
                    queue.push([newMutation, steps + 1]);
                }
            }
        }
    }

    return -1;
};