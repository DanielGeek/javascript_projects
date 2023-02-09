/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskFrequency = new Array(26).fill(0);
    for (const task of tasks) {
        taskFrequency[task.charCodeAt(0) - 65]++;
    }
    taskFrequency.sort((a, b) => b - a);
    let time = 0;
    while (taskFrequency[0] > 0) {
        let i = 0;
        while (i <= n) {
            if (taskFrequency[0] === 0) {
                break;
            }
            if (i < 26 && taskFrequency[i] > 0) {
                taskFrequency[i]--;
            }
            time++;
            i++;
        }
        taskFrequency.sort((a, b) => b - a);
    }
    return time;
};
