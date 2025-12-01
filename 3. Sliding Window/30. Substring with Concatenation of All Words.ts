function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordLen = words[0].length;
  const numberOfWord = words.length;
  const totalLen = wordLen * numberOfWord;
  const map = new Map<string, number>();

  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (let offset = 0; offset < wordLen; offset++) {
    let left = offset;
    let count = 0;
    let window = new Map<string, number>();

    for (let right = offset; right + wordLen <= s.length; right += wordLen) {
      const word = s.substring(right, right + wordLen);

      if (map.has(word)) {
        window.set(word, (window.get(word) || 0) + 1);
        count++;

        while (window.get(word)! > map.get(word)!) {
          const leftWord = s.substring(left, left + wordLen);
          window.set(leftWord, window.get(leftWord)! - 1);
          left += wordLen;
          count--;
        }

        if (count === numberOfWord) {
          result.push(left);
        }
      } else {
        window.clear();
        count = 0;
        left = right + wordLen;
      }
    }
  }

  return result;
}
