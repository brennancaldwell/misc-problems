/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/
R1ppNG3nV9R

Squaring a Sorted Array

Given a sorted array, create a new array containing squares of all the
number of the input array in the sorted order.
*/
const makeSquares = (arr) => {
  let n = arr.length, squares = new Array(n).fill(0), left = 0, right = n - 1, currentIndex = n - 1;

  while (left <= right) {
    let leftVal = Math.pow(arr[left], 2);
    let rightVal = Math.pow(arr[right], 2);
    if (leftVal > rightVal) {
      squares[currentIndex] = leftVal;
      left++;
    } else {
      squares[currentIndex] = rightVal;
      right++;
    }
    currentIndex--;
  }

  return squares;
}
/*
Inside out implementation: find a middle value, then head out to l and r
const make_squares = function(arr) {
  let squares = [], right = 0;
  while (arr[right] < 0) {
    right++;
  }
  let left = right - 1;

  while (left >= 0 || right < arr.length) {
    if (left >= 0 && right < arr.length) {
      if (Math.pow(arr[left], 2) < Math.pow(arr[right], 2)) {
        squares.push(Math.pow(arr[left], 2));
        left--;
      } else {
        squares.push(Math.pow(arr[right], 2));
        right++;
      }
    } else if (right < arr.length) {
      squares.push(Math.pow(arr[right], 2));
      right++;
    } else {
      squares.push(Math.pow(arr[left], 2));
      left--;
    }

  }
  return squares;
};
*/