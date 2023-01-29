/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
	let i = 0,
		sign = 1,
		num = 0,
		INT_MAX = Math.pow(2, 31) - 1,
		INT_MIN = -Math.pow(2, 31);
	while (s.charAt(i) === ' ') i++;
	if (s.charAt(i) === '-') {
		sign = -1;
		i++;
	} else if (s.charAt(i) === '+') {
		i++;
	}
	while (i < s.length && s.charAt(i) >= '0' && s.charAt(i) <= '9') {
		num = num * 10 + (s.charAt(i) - '0');
		if (num > INT_MAX) break;
		i++;
	}
	num *= sign;
	if (num < INT_MIN) return INT_MIN;
	if (num > INT_MAX) return INT_MAX;
	return num;
};

const s = '42';

console.log(myAtoi(s));
