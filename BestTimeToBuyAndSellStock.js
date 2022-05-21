/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/*
I: array of stock price
O: a number that is max profit
C:
E: if array is empty
*/

// if array is empty
  // return 0

// declear variable leftPointer is the first index in array
// declear variable rightPointer is the second index in array


// while rightPointer is smaller than array length
  // if leftPointer is smaller than rightPointer
    // calculate profit
    // if the profit is larger than max profit
      // update the max profit
    // rightPointer move to right ( + 1)
  //else
    // leftPointer move to where rigthPointer at
    // rigthPointer + 1
//return max profit

var maxProfit = function(prices) {
  let maxProfit = 0;
    if (prices.length === 0) {
      return 0;
    }
  let leftPointer = 0;
  let rightPointer = 1;
  while(rightPointer < prices.length) {
    if (prices[leftPointer] < prices[rightPointer]) {
      let profit = prices[rightPointer] - prices[leftPointer];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
      rightPointer ++;
    } else {
      leftPointer = rightPointer;
      rightPointer ++;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));