/**
 * @param {number[]} nums
 * @return {number}
 */

/* 268. Missing Number: https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/


var missingNumber = function(nums) {
  let sum = 0, itemCount = 0;
  while (itemCount <= nums.length) {
    sum += itemCount;
    itemCount++;
  }
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};

/*
Time complexity of the above: O(2n);
Space complexity o the above: O(1);

Other ways of achieving this result:
1) sort in place, then find the first number where index != num
  I'm reading that time complexity of .sort in JS of arrays with < 10 items
  is O(n^2) w/ O(1) space but for larger arrays, it is O(n log n) time with
  O(log n) space.
2) use a hashset (or object) to store all numbers, then return the first that does not appear
3) bit manipulation (I confess, I am not well-acquainted with this)
4) Sum, as above, but using Gauss's formula:
      nums.length(nums.length + 1) / 2
   This formula will return the sum of nums.length sequential numbers.
*/