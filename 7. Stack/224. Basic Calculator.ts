function calculate(s: string): number {
    const n: number = s.length;
    let result: number = 0;
    let sign = 1;
    const stack: number[][] = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === ' ') continue;

        else if (!isNaN(+s[i])) {
            let num = 0;
            while (i < n && s[i] !== ' ' && !isNaN(+s[i])) {
                num = num * 10 + +s[i];
                i++;
            }
            i--;
            result += num * sign;
        }

        else if (s[i] === '+' || s[i] === '-') {
            sign = (s[i] === '+') ? 1 : -1;
        }

        else if (s[i] === '(') {
            stack.push([result, sign]);
            result = 0;
            sign = 1;
        }

        else if (s[i] === ')') {
            const [value, operator] = stack.pop()!;
            result = result * operator + value;
        }
    }

    return result;
}
