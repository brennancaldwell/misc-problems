/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO

Triplets with Smaller Sum

Given an array arr of unsorted numbers and a target sum, count all triplets
in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are
three different indices. Write a function to return the count of such
triplets.
*/

const tripletWithSmallerSum = (arr, target) => {
  let count = 0;
  arr.sort((a, b) => a-b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += (right - left);
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

/*
Time O(n^2)
Space O(n) (sort)
*/