/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(inputString, len) {
    var result = '';
    var arr = inputString.split('');
    var range = len - 1;
    
    for (var i = 0; i < arr.length; i++) {
        if ( (len - arr[i]) > (range/2) ) {
            var x = [];
            x.push(arr[i], arr[i+1]);
            i++;
            var s = x.join("");
            result = result + " " + s;
        } else {
            var y = [];
            y.push(arr[i]);           
            var s = y.join("");
            result = result+ " " + s;
        }
    }

    var arrResult = [];
    var arr2 = result.split(' ');
    var smallest = arr2[0];
    console.log(arr2);
    var largest = arr2[0];
    for (var i = 0; i < arr2.length; i++) {
        // i need to convert the string to number before combare 
        // it but the time is finished :( i did not try it 
        if ( largest < parseInt(arr2[i]) ) {
            largest = arr2[i];
        }

        if ( smallest >= parseInt(arr2[i]) ) {
            smallest = arr2[i];
        }           
    }

    arrResult.push(smallest, largest);
    console.log(arrResult);

    //return 'The range is ' + arrResult + '\n' + result;
 }
