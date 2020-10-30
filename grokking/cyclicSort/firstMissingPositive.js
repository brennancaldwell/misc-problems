/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM

Given an unsorted array containing numbers, find the smallest missing
positive number in it.
*/

const smallestMissingPositive = (nums) => {
  let i = 0;

  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return -1;
}

/*
Key here is that we *ignore* any numbers zero or below and swap to put all
numbers in their place at index - 1.
*/