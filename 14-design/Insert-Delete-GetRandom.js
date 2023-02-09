class RandomizedSet {
	constructor() {
		this.dict = new Map();
		this.list = [];
		this.rand = Math.random();
	}

	insert(val) {
		if (this.dict.has(val)) return false;
		this.dict.set(val, this.list.length);
		this.list.push(val);
		return true;
	}

	remove(val) {
		if (!this.dict.has(val)) return false;
		let lastElement = this.list[this.list.length - 1];
		let idx = this.dict.get(val);
		this.list[idx] = lastElement;
		this.dict.set(lastElement, idx);
		this.list.pop();
		this.dict.delete(val);
		return true;
	}

	getRandom() {
		return this.list[Math.floor(Math.random() * this.list.length)];
	}
}
