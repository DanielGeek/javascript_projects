/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
    return result;
  };
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  var deserialize = function(data) {
    if (data.length === 0) return null;
    let queue = [];
    let root = new TreeNode(data[0]);
    queue.push(root);
    for (let i = 1; i < data.length; i++) {
      let parent = queue.shift();
      if (data[i] !== null) {
        let left = new TreeNode(data[i]);
        parent.left = left;
        queue.push(left);
      }
      i++;
      if (i < data.length && data[i] !== null) {
        let right = new TreeNode(data[i]);
        parent.right = right;
        queue.push(right);
      }
    }
    return root;
  };
  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
    return result;
  };
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  var deserialize = function(data) {
    if (data.length === 0) return null;
    let queue = [];
    let root = new TreeNode(data[0]);
    queue.push(root);
    for (let i = 1; i < data.length; i++) {
      let parent = queue.shift();
      if (data[i] !== null) {
        let left = new TreeNode(data[i]);
        parent.left = left;
        queue.push(left);
      }
      i++;
      if (i < data.length && data[i] !== null) {
        let right = new TreeNode(data[i]);
        parent.right = right;
        queue.push(right);
      }
    }
    return root;
  };
  