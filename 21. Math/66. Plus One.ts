function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    const plus = digits[i] + 1;

    if (plus < 10) {
      digits[i] = plus;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
}
