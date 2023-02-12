/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function lengthOfLongestSubstringKDistinct(s, k) {
    const map = new Map();
    let start = 0;
    let longest = 0;
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
      map.set(char, (map.get(char) || 0) + 1);
      while (map.size > k) {
        const startChar = s[start];
        map.set(startChar, map.get(startChar) - 1);
        if (map.get(startChar) === 0) {
          map.delete(startChar);
        }
        start++;
      }
      longest = Math.max(longest, end - start + 1);
    }
    return longest;
  }
  