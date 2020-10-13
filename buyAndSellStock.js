/* 121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Say you have an array for which the ith element is the price of a given stock on day i.

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

const maxProfit = (prices) => {
  let buyPt = Infinity, profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPt) {
      buyPt = prices[i];
    } else if (prices[i] - buyPt > profit) {
      profit = prices[i] - buyPt;
    }
  }
  return profit;
}

/*
Brute force method is O(n^2) -- simply two nested loops to test
each buy point against the remaining sell values.

O(n) solution relies on the fact that all we need to track is
the 1) lowest buyPt, and 2) the highest profit thereon.

In conceiving the problem, at first I was trying to use two
pointers or track simply lowest peak and highest point. But
thinking in terms of lowest point and highest profit anticipates,
say, the actual lowest point coming at the end of the array --
yes, we will redefine the valley, but the highest profit remains
the same.

With each array item, we are performing one of two operations:
1) If this item is the lowest we've seen so far, we establish a
new buyPt
2) If we are not establishing a new buyPt, we are comparing the
difference between current array item and current buyPt with the
current profit -- and establishing a new profit if it's greater.

*/