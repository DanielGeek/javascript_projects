class Solution {
	constructor(nums) {
		this.array = nums;
		this.original = [...nums];
	}

	reset() {
		this.array = [...this.original];
		return this.array;
	}

	shuffle() {
		for (let i = this.array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.array[i], this.array[j]] = [this.array[j], this.array[i]];
		}
		return this.array;
	}
}
