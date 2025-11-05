function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) break;
    else if (sum > target) right--;
    else left++;
  }

  return [left + 1, right + 1];
}
