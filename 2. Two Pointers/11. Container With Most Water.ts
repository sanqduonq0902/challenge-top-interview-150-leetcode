function maxArea(height: number[]): number {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let maxArea = 0;

  while (left < right) {
    let length = right - left;
    let width = Math.min(height[left], height[right]);
    let area = length * width;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxArea;
}
