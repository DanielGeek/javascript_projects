var rob = function (nums) {
	let prevMax = 0;
	let currMax = 0;
	for (let num of nums) {
		let temp = currMax;
		currMax = Math.max(prevMax + num, currMax);
		prevMax = temp;
	}
	return currMax;
};
