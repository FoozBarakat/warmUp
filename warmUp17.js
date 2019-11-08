// There is a special keyboard with all keys in a single row.
// ​
// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your 
//finger is at index 0. To type a character, you have to move your finger to the index of the desired character. 
//The time taken to move your finger from index i to index j is |i - j|.
// ​
// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.
// ​
 
// ​
// Example 1:
// ​
// Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4. 
// Example 2:
// ​
// Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
// Output: 73
 
// ​
// Constraints:
// ​
// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 10^4
// word[i] is an English lowercase letter.

// ​
// ​
var keyboard = "abcdefghijklmnopqrstuvwxyz";
var word = "cba";

// the next step is to sum the elment in the array result, but the time is finished i didn't test the last step
 var calculateTime = function(keyboard, word) {
    var result = [];
    var sum = 0;
    for (var i =0 ; i < word.length; i++) {

    	if ( i !== 0 ){
    	if ( keyboard.indexOf( word[i] ) >= keyboard.indexOf( word[i - 1] )) {
    		result.push( keyboard.indexOf( word[i] ) - keyboard.indexOf( word[i - 1] ));
    		} else {
    			result.push( keyboard.indexOf( word[i - 1] ) - keyboard.indexOf( word[i] ));
   			 }
   	} else {
   		result.push( keyboard.indexOf( word[i] ) )
   	} 

   }
   	
   for ( var j = 0; j < result.length; j++) {
   	sum += result[j];

   }
    return sum;
 };



