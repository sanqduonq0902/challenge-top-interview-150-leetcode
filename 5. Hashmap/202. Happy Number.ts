function nextNum(x: number): number {
  let sum = 0;
  while (x > 0) {
    const digits = x % 10;
    sum += digits * digits;
    x = Math.floor(x / 10);
  }

  return sum;
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  do {
    slow = nextNum(slow);
    fast = nextNum(nextNum(fast));
  } while (slow !== fast);

  return slow === 1;
}
