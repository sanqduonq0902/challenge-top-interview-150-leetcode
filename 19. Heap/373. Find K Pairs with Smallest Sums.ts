type Node = {
    sum: number, 
    i: number, 
    j: number
};

class MyMinHeap {
    private heap: Node[] = [];

    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    size(): number {
        return this.heap.length;
    }

    peek(): Node {
        return this.heap[0];
    }

    enqueue(val: Node): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue(): Node | undefined {
        if (this.heap.length === 1) return this.heap.pop()!;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return root;
    }

    private bubbleUp(i: number): void {
        while (i > 0 && this.heap[i].sum < this.heap[this.parent(i)].sum) {
            [this.heap[this.parent(i)], this.heap[i]] = [this.heap[i], this.heap[this.parent(i)]];
            i = this.parent(i);
        }
    }

    private bubbleDown(i: number): void {
        let smallest = i;
        const l = this.left(i);
        const r = this.right(i);

        if (l < this.heap.length && this.heap[l].sum < this.heap[smallest].sum) {
            smallest = l;
        }

        if (r < this.heap.length && this.heap[r].sum < this.heap[smallest].sum) {
            smallest = r;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.bubbleDown(smallest);
        }
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const answer: number[][] = [];

    if (nums1.length === 0 || nums2.length === 0 || k === 0) return answer;

    const heap = new MyMinHeap();

    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        heap.enqueue({
            sum: nums1[i] + nums2[0],
            i: i,
            j: 0
        });
    };

    while (k-- > 0 && heap.size() > 0) {
        const node = heap.dequeue()!;
        answer.push([nums1[node.i], nums2[node.j]]);

        if (node.j + 1 < nums2.length) {
            heap.enqueue({
                sum: nums1[node.i] + nums2[node.j + 1],
                i: node.i,
                j: node.j + 1
            });
        };
    }

    return answer;
};