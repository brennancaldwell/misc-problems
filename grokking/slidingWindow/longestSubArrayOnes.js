/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
Longest Subarray with Ones after Replacement (hard)

Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

*/

const length_of_longest_substring = function(arr, k) {
  let max = 0, start = 0, ones = 0;
  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 1) {
      ones++;
    }

    if ((end - start + 1) - ones > k) {
      if (arr[start] === 1) {
        ones--;
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
  }
  return max;
};


/*
Instincts a little more solid here: must track number of ones, and if you've ever got
more than K zeroes, you've got to slide your start pointer (and decrement ones as
  appropriate).
*/