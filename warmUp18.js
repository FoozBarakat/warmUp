// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

//////////////////////////////////////////////////////

function occurence1(string) {

var count = 0;
var holdChar; 
var result = '';

for (var i = 0; i < string.length; i++) {
	holdChar = string[i];
	
	for (var j = 0; j < string.length; j++) {
		if (string[j] === holdChar[i]) {
			count++;			
		}	
	}	
	result.push(count);
}

return result;
}

function occurence2(string) {
	var arr = string.split("")
	var result = [];
	var num = 0;
	for (var i = 0; i < string.length; i++) {
	result = arr.filter(element => element === string[i])
	num = result.length;
	}
	
	return num;
}