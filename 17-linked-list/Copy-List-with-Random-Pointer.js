/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // Check if the linked list is empty
    if (!head) {
        return null;
    }
    
    // Create a map to store the new nodes
    let map = new Map();
    
    // Create a new head for the copied linked list
    let newHead = new Node(head.val);
    map.set(head, newHead);
    
    // Copy the rest of the linked list
    let curr = head;
    let newCurr = newHead;
    while (curr.next) {
        newCurr.next = new Node(curr.next.val);
        curr = curr.next;
        newCurr = newCurr.next;
        map.set(curr, newCurr);
    }
    
    // Copy the random pointers
    curr = head;
    newCurr = newHead;
    while (curr) {
        newCurr.random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
        newCurr = newCurr.next;
    }
    
    // Return the head of the copied linked list
    return newHead;
};
