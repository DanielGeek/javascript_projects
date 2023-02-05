/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result;
    
    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        count++;
        if (count === k) result = node.val;
        inorder(node.right);
    }
    inorder(root);
    return result;
};
