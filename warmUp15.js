// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(string) {
	var hold = [];
	var result = '';
	for (var i = 0; i <= string.length; i++) {
		if (string[i] === ' ') {
			var word = string.slice(0, i+1);
			hold.unshift(word);
			string = string.replace(word, '');
			i = 0;
		}
	}

	result = string + ' ' + hold.join('');
	return result;
}

console.log( reverseStr("hi there how is the weather today") );