// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string) {
	var result = '';
	var i = string.length;
	var count = 1;
	
	while(i > 0) {
		result = result + string.slice(i - 1, i) + count;

		count++;

		if(count === string.length) {
		count = '';
		}

		i--;
	}

	return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array, string) {
	var result = [];

	for(var i = 0; i < array.length; i++) {
		
		if (array[i].length === string.length){
			result.push(array[i]);
		}
	}

	return result;
}