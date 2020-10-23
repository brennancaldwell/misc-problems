/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0

Dutch National Flag Problem

Given an array containing 0s, 1s and 2s, sort the array in-place. You
should treat numbers of the array as objects, hence, we can’t count 0s, 1s,
and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue;
and since our input array also consists of three different numbers that is
why it is called Dutch National Flag problem.

*/


const dutchFlagSearch = (arr) => {
  let zeroes = 0, twos = arr.length - 1, i = 0;

  while (i <= twos) {
    if (arr[i] === 0) {
      [arr[i], arr[zeroes]] = [arr[zeroes], arr[i]];
      zeroes++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[twos]] = [arr[twos], arr[i]];
      twos--;
    }
  }

  return arr;
};

/*
Time O(n)
Space O(1)

One pointer each to partition zeroes and twos.
*/
