/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0

We are given an unsorted array containing ‘n’ numbers taken from the range
1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but
due to a data error, one of the numbers got duplicated which also resulted
in one number going missing. Find both these numbers.
*/

const findCorruptNumbers = (nums) => {
  let i = 0;

  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] !== nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }

  return [-1, -1];
};