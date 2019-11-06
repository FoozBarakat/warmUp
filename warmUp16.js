// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function instances(string) {
	var result = 0;
	var word = 'balloon';
	var arr = word.split('');
	var charCount = 0;
	
	for (var i = 0; i < string.length; i++) {

		for (var j = 0; j < arr.length; j++) {
			if (string[i] === arr[j]) {
				charCount++;
				//console.log(charCount);
			}

		}
		
		if (charCount >= arr.length) {

			if (charCount % arr.length === 0) {
				result = Math.floor(charCount / arr.length) - 1;
				//console.log(result)
		} else {
				result =  Math.floor(charCount / arr.length)
			}
		}
	}

	return result;
}

//console.log( instances('nlaebolko') );

console.log( instances('loonbalxballpoon') );

//console.log( instances('RebootKamp') );