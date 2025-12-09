function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let left = 0;

    for (let right = 1; right <= nums.length; right++) {
        if (right === nums.length || nums[right] !== nums[right - 1] + 1) {
            if (left === right - 1) {
                result.push(`${nums[left]}`);
            } 
            else {
                result.push(`${nums[left]}->${nums[right - 1]}`);
            }
            left = right;
        }
    }
        
    return result;
};