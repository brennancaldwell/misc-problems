/*
Given an array nums of n integers where n > 1,  return an array output such
that output[i] is equal to the product of all the elements of nums except
nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix
or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
*/

var productExceptSelf = function(nums) {
  const result = [], left = [], right = Array(nums.length);
  left[0] = 1;
  right[right.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
      left[i] = nums[i - 1] * left[i - 1];
  }
  for (let j = right.length - 2; j >= 0; j--) {
      right[j] = nums[j + 1] * right[j + 1];
  }
  for (let a = 0; a < nums.length; a++) {
      result[a] = left[a] * right[a];
  }
  return result;
};