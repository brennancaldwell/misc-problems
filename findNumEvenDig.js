/*
1295: Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even
number of digits.
*/

const findNumbers = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let digitCount = 0, number = nums[i];
    while (number >= 1) {
      digitCount++;
      number = Math.floor(number / 10);
    }
    if (digitCount % 2 === 0) {
      result++;
    }
  }
  return result;
}

/*
Interesting side-note: using the ternary operator in lines 16-17 slows
things down: current runs 72ms, faster than 93.16% of Leetcode submissions.

Unless I'm mistaken, time complexity is O(a log k), where a is the length
of the array, and k is the size of the array-item number.
*/