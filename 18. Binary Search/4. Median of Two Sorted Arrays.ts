function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2;
    }
    else return arr[mid];
};