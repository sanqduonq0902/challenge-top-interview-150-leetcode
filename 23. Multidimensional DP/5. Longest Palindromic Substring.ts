function longestPalindrome(s: string): string {
    const n = s.length;
    let start = 0;
    let max = 1;

    function palindrome(left: number, right: number): void {
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > max) {
                max = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        palindrome(i, i);
        palindrome(i, i + 1);
    }

    return s.substring(start, start + max);
};