/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY

Given a set of distinct numbers, find all of its permutations.
*/

function findPermutations(nums) {
  const result = [];
  (function permute(nums, index, current)  {
    if (index === nums.length) {
      result.push(current);
      return
    }
    for (let i = 0; i < current.length + 1; i++) {
      let newCurrent = current.slice();
      newCurrent.splice(i, 0, nums[index]);
      permute(nums, index + 1, newCurrent);
    }
  }) (nums, 0, []);
  return result;
};