class RandomizedSet {
  private arr: number[];
  private setArr: Set<number>;

  constructor() {
    this.arr = [];
    this.setArr = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.setArr.has(val)) return false;
    this.setArr.add(val);
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.setArr.has(val)) return false;
    this.setArr.delete(val);
    const index = this.arr.indexOf(val);
    this.arr[index] = this.arr[this.arr.length - 1];
    this.arr.pop();
    return true;
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.arr.length);
    return this.arr[random];
  }
}
