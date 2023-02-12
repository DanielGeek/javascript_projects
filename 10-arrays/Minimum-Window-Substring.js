/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    const map = new Map();
    for (const char of t) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    let start = 0;
    let end = 0;
    let count = map.size;
    let min = Infinity;
    let result = '';
    while (end < s.length) {
      const char = s[end];
      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
          count--;
        }
      }
      end++;
      while (count === 0) {
        if (end - start < min) {
          min = end - start;
          result = s.slice(start, end);
        }
        const startChar = s[start];
        if (map.has(startChar)) {
          if (map.get(startChar) === 0) {
            count++;
          }
          map.set(startChar, map.get(startChar) + 1);
        }
        start++;
      }
    }
    return result;
  }
  