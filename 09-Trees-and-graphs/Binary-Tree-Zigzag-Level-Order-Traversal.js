/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    let level = 0;
    while (queue.length > 0) {
        let size = queue.length;
        let levelArr = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            levelArr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (level % 2 === 1) levelArr.reverse();
        result.push(levelArr);
        level++;
    }
    return result;
};
