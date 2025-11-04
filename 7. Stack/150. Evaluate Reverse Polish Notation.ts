function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const s of tokens) {
    if (s === "+" || s === "-" || s === "*" || s === "/") {
      const top1 = stack.pop()!;
      const top2 = stack.pop()!;
      let result = 0;

      switch (s) {
        case "+":
          result = top1 + top2;
          break;
        case "-":
          result = top2 - top1;
          break;
        case "*":
          result = top1 * top2;
          break;
        case "/":
          result = Math.trunc(top2 / top1);
          break;
      }

      stack.push(result);
    } else {
      stack.push(+s);
    }
  }

  return stack.pop()!;
}
