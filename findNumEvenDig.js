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
    digitCount % 2 === 0
    ? result++
    : result;
  }
  return result;
}