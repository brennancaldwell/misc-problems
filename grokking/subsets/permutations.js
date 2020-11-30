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

/*
Time: O(N * N!)
Space: O(N * N!)

Non-recursive solution!

function findPermutations (nums) {
  let result = [], permutations = [];
  permutations.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    for (let p = 0; p < permutations.length; p++) {
      const oldPerm = permutations.shift();
      for (let j = 0; j < oldPerm.length + 1; j++) {
        const newPerm = oldPerm.slice();
        newPerm.splice(j, 0, currentNum);
        if (newPerm.length === nums.length) {
          result.push(newPerm);
        } else {
          permutations.push(newPerm);
        }
      }
    }
  }
  return result;
}
*/