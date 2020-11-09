/*
Leetcode: 46. Permutations
https://leetcode.com/problems/permutations/

Given a colleciton of distinct integers, return all possible permutations
*/

function permute (nums) {
  const result = [];
  (function shuffle(currentArray, leftovers) {
    if (currentArray.length === nums.length) {
      result.push(currentArray);
      return;
    }

    for (let i = 0; i < leftovers.length; i++) {
      shuffle(currentArray.concat(leftovers[i]), leftovers.slice(0, i).concat(leftovers.slice(i + 1)));
    }
  })([], nums);
  return result;
}