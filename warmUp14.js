 /*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  var sell;
  var buy;
  var result;

  if (prices.length % 2 === 1) {
  	return 'Otput: 0'
  }

  for (var i = 0; i < prices.length; i++) {
  	
  	if ( prices[i] === Math.max(...prices) ) {
  		if ( prices.indexOf(prices[i]) % 2 ===  0 ) {
  			sell = prices[i];
  		} else { // this condition is not rigth, we should find the secound largest number and make equal to sell
  			if (sell === undefined) {
  				sell = 10000000;
  			}

  			if ( Math.max(...prices) !== prices[i]) {
  			if ( (Math.max(...prices) - prices[i]) < sell) {
  				sell = prices[i];
 				} 
  		} 
  	}
  	}

  	if ( prices[i] === Math.min(...prices) ) {
  		if ( prices.indexOf(prices[i]) % 2 === 1 ) {
  			buy = prices[i]
  		}
  	}
  }
  result = sell - buy;
  return 'Output: ' + result;
};
