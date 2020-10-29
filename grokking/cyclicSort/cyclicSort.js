/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY

We are given an array containing ‘n’ objects. Each object, when created,
was assigned a unique number from 1 to ‘n’ based on their creation
sequence. This means that the object with sequence number ‘3’ was created
just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence
number in O(n) and without any extra space. For simplicity, let’s
assume we are passed an integer array containing only the sequence numbers,
though each number is actually an object.
*/

const cyclicSort = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] !== nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    } else {
      i++;
    }
  }
  return nums;
}