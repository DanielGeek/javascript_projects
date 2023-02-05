/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    if (!intervals.length) return [];
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    let previous = intervals[0];
    const result = [previous];
  
    for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      if (previous[1] >= current[0]) {
        previous[1] = Math.max(previous[1], current[1]);
      } else {
        result.push(current);
        previous = current;
      }
    }
  
    return result;
  };
  