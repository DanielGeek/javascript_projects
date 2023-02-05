/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0;
    let starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    let ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
    let rooms = 0;
    let endPointer = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endPointer]) {
            rooms++;
        } else {
            endPointer++;
        }
    }
    return rooms;
};
