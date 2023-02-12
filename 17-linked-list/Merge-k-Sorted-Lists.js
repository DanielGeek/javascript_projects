function PriorityQueue(comparator) {
	this.comparator = comparator;
	this.heap = [];
}
PriorityQueue.prototype.enqueue = function (val) {
	this.heap.push(val);
	this.bubbleUp(this.heap.length - 1);
};
PriorityQueue.prototype.dequeue = function () {
	const val = this.peek();
	const last = this.heap.pop();
	if (this.heap.length > 0) {
		this.heap[0] = last;
		this.bubbleDown(0);
	}
	return val;
};
PriorityQueue.prototype.peek = function () {
	if (this.isEmpty()) {
		throw new Error('Priority queue is empty');
	}
	return this.heap[0];
};
PriorityQueue.prototype.isEmpty = function () {
	return this.heap.length === 0;
};
PriorityQueue.prototype.bubbleUp = function (i) {
	while (i > 0) {
		const p = (i - 1) >> 1;
		if (this.comparator(this.heap[i], this.heap[p]) < 0) {
			[this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
			i = p;
		} else {
			break;
		}
	}
};
PriorityQueue.prototype.bubbleDown = function (i) {
	while (i < this.heap.length) {
		const l = i * 2 + 1;
		const r = i * 2 + 2;
		let m = i;
		if (
			l < this.heap.length &&
			this.comparator(this.heap[l], this.heap[m]) < 0
		) {
			m = l;
		}
		if (
			r < this.heap.length &&
			this.comparator(this.heap[r], this.heap[m]) < 0
		) {
			m = r;
		}
		if (m !== i) {
			[this.heap[i], this.heap[m]] = [this.heap[m], this.heap[i]];
			i = m;
		} else {
			break;
		}
	}
};

function mergeKLists(lists) {
	const pq = new PriorityQueue((a, b) => a.val - b.val);
	for (const list of lists) {
		if (list) {
			pq.enqueue(new ListNode(list.val, list));
		}
	}
	const dummy = new ListNode();
	let curr = dummy;
	while (!pq.isEmpty()) {
		const node = pq.dequeue();
		curr.next = node;
		curr = curr.next;
		if (node.next) {
			pq.enqueue(new ListNode(node.next.val, node.next));
		}
	}
	return dummy.next;
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
