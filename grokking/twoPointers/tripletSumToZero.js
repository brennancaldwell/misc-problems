/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r

Triplet Sum To Zero

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
*/

const searchTriplets = (arr) => {
  let triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    pairFinder(-arr[i], i + 1, arr, triplets);
  }
  return triplets;
}

const pairFinder = (target, left, arr, triplets) => {
  let right = arr.length - 1;

  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      triplets.push([-target, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (target > sum) {
      left++;
    } else {
      right--;
    }

  }
}

/*
Time Complexity: O(n^2)
 - O(n log n) to sort
 - searchPair O(n), called for each array value, so O(n^2).
 - O(n log n + n^2) --> O(n^2)
Space Complexity: O(n)
*/