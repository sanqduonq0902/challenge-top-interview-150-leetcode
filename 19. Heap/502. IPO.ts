class MyMaxHeap {
  heap: number[] = [];

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;
    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return max;
  }

  bubbleUp(i: number) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  bubbleDown(i: number) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;

      if (l < n && this.heap[l] > this.heap[largest]) largest = l;
      if (r < n && this.heap[r] > this.heap[largest]) largest = r;

      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const projects = profits.map((p, i) => ({
    profit: p,
    capital: capital[i],
  }));

  projects.sort((a, b) => a.capital - b.capital);

  const maxHeap = new MyMaxHeap();
  let i = 0;

  for (let round = 0; round < k; round++) {
    while (i < projects.length && projects[i].capital <= w) {
      maxHeap.push(projects[i].profit);
      i++;
    }

    if (maxHeap.isEmpty()) break;

    w += maxHeap.pop()!;
  }

  return w;
}

