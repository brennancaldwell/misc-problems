/*

Grokking the Coding Interview: https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
*/

const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = -Infinity;
  let start = 0, sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[start];
      start++;
    }
  }
  return maxSum;
};