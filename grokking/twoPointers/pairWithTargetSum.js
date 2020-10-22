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

Other approach
O(n) time and space

const pairWithTargetSum = (arr, target) => {
  const track = {};
  for (let i = 0; i < arr.length; i++) {
    if (track[target - arr[i]] !== undefined) {
      return [track[target - arr[i]], i];
    }
    track[arr[i]] = i
  }
  return [-1, -1]
}
*/