/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr

Cycle in a Circular Array

We are given an array containing positive and negative numbers. Suppose the
array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive
we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’
indices. You should assume that the array is circular which means two
things:

If, while moving forward, we reach the end of the array, we will jump to t
the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, we will
jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The cycle should have
more than one element and should follow one direction which means the cycle
should not contain both forward and backward movements.

*/

const circularArrayLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isPositive = arr[i] >= 0, slow = i, fast = i;

    while (true) {
      slow = findIndex(arr, isPositive, slow);
      fast = findIndex(arr, isPositive, fast);
      if (fast !== -1) {
        fast = findIndex(arr, isPositive, fast);
      }

      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
}

const findIndex = (arr, isPositive, currentIndex) => {
  let direction = arr[currentIndex] >= 0;

  if (isPositive !== direction) {
    return -1;
  }

  let newIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (newIndex < 0) {
    newIndex += arr.length;
  }

  if (newIndex === currentIndex) {
    return -1;
  }

  return newIndex;
}

/*
Time O(n^2)
Space O(1)

We could also remember all numbers that have been visited, which would
improve time complexity to O(n) but bump up space to O(n)
*/