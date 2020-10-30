/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0

Find the First K Missing Positive Numbers

Given an unsorted array containing numbers and a number ‘k’, find the first
‘k’ missing positive numbers in the array.

*/

const find_first_k_missing_positive = function(nums, k) {
  let missingNumbers = [], i = 0, seen = {};

  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1 && missingNumbers.length < k) {
      seen[nums[i]] = true;
      missingNumbers.push(i + 1);
    }
  }

  while (missingNumbers.length < k) {
    if (!seen[i + 1]) {
      missingNumbers.push(i + 1);
    }
    i++;
  }

  return missingNumbers;
};
