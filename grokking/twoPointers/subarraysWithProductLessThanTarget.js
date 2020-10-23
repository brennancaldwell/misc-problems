/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz

Subarrays With Product Less Than Target

Given an array with positive numbers and a target number, find all of its
contiguous subarrays whose product is less than the target number.

*/

const find_subarrays = function(arr, target) {
  let result = [], start = 0, product = 1;
  for (let end = 0; end < arr.length; end++) {
    product *= arr[end];
    while (product >= target && start < arr.length) {
      product /= arr[start];
      start++;
    }

    let temp = [];
    for (let i = end; i >= start; i--) {
      temp.unshift(arr[i]);
      result.push(temp.slice());
    }
  }
  return result;
};