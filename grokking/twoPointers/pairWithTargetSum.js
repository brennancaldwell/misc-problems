/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
*/

const pairWithTargetSum = (arr, target) => {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    if (arr[start] + arr[end] < target) {
      start++;
    } else if (arr[start] + arr[end] > target) {
      end --;
    } else {
      return [start, end];
    }
  }

  return [-1, -1];
}

/*
Time complexity O(n)
Space complexity O(1)
*/