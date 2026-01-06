class MyHeap {
    heap: number[] = [];
    compare: (a: number, b: number) => boolean;

    constructor(compare: (a: number, b: number) => boolean) {
        this.compare = compare;
    }

    size(): number {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop(): number | null {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[p], this.heap[i])) break
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }

    bubbleDown() {
        let i = 0;
        while (true) {
            let best = i;
            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (l < this.heap.length && !this.compare(this.heap[best], this.heap[l])) best = l
            if (r < this.heap.length && !this.compare(this.heap[best], this.heap[r])) best = r

            if (best === i) break;
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]]
            i = best
        }
    }
}


class MedianFinder {
    maxHeap = new MyHeap((a, b) => a >= b);
    minHeap = new MyHeap((a, b) => a <= b);

    addNum(num: number): void {
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.push(num);
        }
        else {
            this.minHeap.push(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        }
        else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.push(this.minHeap.pop())
        }
    }

    findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek()
        }
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    }
}
