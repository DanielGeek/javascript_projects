/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
	let vals = [];

	let currentNode = head;
	while (currentNode) {
		vals.push(currentNode.val);
		currentNode = currentNode.next;
	}

	let front = 0;
	let back = vals.length - 1;
	while (front < back) {
		if (vals[front] !== vals[back]) {
			return false;
		}
		front++;
		back--;
	}
	return true;
}
