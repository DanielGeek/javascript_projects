/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// A complete working javascript program to
// delete a node in a linked list at a
// given position

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function deleteNode(node) {
      let nextNode = node.next;
      node.val = nextNode.val;
      node.next = nextNode.next;
      nextNode.next = null;
      delete nextNode;
  }
  