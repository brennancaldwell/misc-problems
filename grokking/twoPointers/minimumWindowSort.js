/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6

Minimum Window Sort

Given an array, find the length of the smallest subarray in it which when
sorted will sort the whole array.

*/

const shortestWindowSort = (arr) => {
  let low = 0; high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] < arr[low + 1]) {
    low++;
  }

  if (low === array.length - 1) return 0;

  while (high >= 0 && arr[high] > arr[high - 1]) {
    high--;
  }

  let subArrayMin = Infinity, subArrayMax = -Infinity;
  for (let i = low; i <= high; i++) {
    subArrayMin = Math.min(subArrayMin, arr[i]);
    subArrayMax = Math.max(subArrayMax, arr[i]);
  }

  while (low > 0 && arr[low - 1] > subArrayMin) {
    low--;
  }

  while (high < arr.length - 1 && arr[high + 1] < subArrayMax) {
    high++;
  }

  return high - low + 1;
}

/*
Above: O(n) time, O(1) space.
The main difference between the above and my naive solution below:
1) find the first occurrence of out-of-place numbers on L and R
2) determine the min and max of the subArray
3) expand subArray while left>min and right<max

Kind of combination of my attempt below and the failed approach of
determining max and min outright.

My inelegant naive solution:
Time O(n^2)
Space O(1)

Essentially have to iterate through for each value to see if there exists a number smaller than that...
const shortest_window_sort = function(arr) {
  // TODO: Write your code here
  let leftBound = 0; let rightBound = arr.length - 1;
  while (leftBound < arr.length) {
    let found = false;
    for (let i = leftBound + 1; i < arr.length; i++) {
      if (arr[i] < arr[leftBound]) {
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
    leftBound++;
  }

  if (leftBound === arr.length) { return 0; }

  while (rightBound >= 0) {
    let found = false;
    for (let i = rightBound - 1; i >= 0; i--) {
      if (arr[i] > arr[rightBound]) {
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
    rightBound--;
  }

  return rightBound - leftBound + 1;
};

Here's another implementation.
*/