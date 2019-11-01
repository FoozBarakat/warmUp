/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// Q1
var obj = {
            i: 1,
            v: 5,
            x: 10,
            l: 50,
            c: 100,
            d: 500,
            m: 1000
          }

function solution(string) {
  var result = 0;
  
  for (var i =0; i < string.length; i++) {

    for (var key in obj) {
      if (string[i].toLowerCase() === key ) {
        result += obj[key];
       }
    }
  }
  return result;
}

console.log( solution('XXI') );

// Q2
// we could use reduce to solve this one i think it less code but ther is no time to redo it :)
function toCamelCase(string) {
var result = string[0];

for (var i = 1; i < string.length; i++) {
  

  if (string[i] === '-' || string[i] === '_') {
     ++i;
     result += string[i].toUpperCase();
    } else {
      result += string[i];
    }  
}

return result;

}

console.log( toCamelCase("the-stealth-warrior") );

// Q3
function filter_list(array) {
  return array.filter(elment => typeof elment === 'number');
}