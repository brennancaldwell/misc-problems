/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA

Triplet Sum Close To Target
Given an array of unsorted numbers and a target number, find a triplet in
the array whose sum is as close to the target number as possible, return
the sum of the triplet. If there are more than one such triplet, return the
sum of the triplet with the smallest sum.

*/

const tripletSumCloseToTarget = (arr, targetSum) => {
  let diff = Infinity;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1, right = arr.length - 1;

    while (left < right) {
      let currDiff = targetSum - arr[i] - arr[left] - arr[right];

      if (currDiff === 0) {
        return targetSum;
      }

      if (Math.abs(currDiff) < Math.abs(diff) || (Math.abs(currDiff) === Math.abs(diff) && currDiff > diff)) {
        diff = currDiff;
      }

      if (currDiff < 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return targetSum - diff;
}
