function searchRange(nums: number[], target: number): number[] {
    function binarySearch(arr: number[], x: number, isFirst: boolean) {
        let n = arr.length;
        let left = 0;
        let right = n - 1;
        let idx = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                idx = mid;
                if (isFirst) {
                    right = mid - 1;
                }
                else left = mid + 1;
            }
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return idx;
    }

    return [binarySearch(nums, target, true), binarySearch(nums, target, false)];
};