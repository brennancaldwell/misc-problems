/*
Leetcode Easy. Given an array of size n, find the majority element -- the
element that appears more than n/2 times.

You may assume that the array is non-empty and the majority element always
exists in the array.

Note: the break statement made this run faster than 92.06% of JS
submissions (vs. 44% without).
*/

var majorityElement = function(nums) {
  var result;
  var obj = nums.reduce((acc, val) => {
      acc[val] ? acc[val]++ : acc[val] = 1;
      return acc;
  }, {})
  for (var key in obj) {
      if (obj[key] > (nums.length / 2)) {
          result = key;
          break;
      }
  }
  return result;
};