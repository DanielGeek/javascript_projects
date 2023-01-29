/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
	let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}

const s = 'A man, a plan, a canal: Panama';

console.log(isPalindrome(s)); // outputs: true
