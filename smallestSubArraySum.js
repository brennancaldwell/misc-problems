/*
Grokking the Coding Interview: https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ

Smallest Subarray With A Given Sum

Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
*/

const smallest_subarray_with_given_sum = function(s, arr) {
  let num = Infinity, start = 0, sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= s) {
      num = Math.min(num, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }
  return num;
};