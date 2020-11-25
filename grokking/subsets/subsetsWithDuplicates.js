/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr

Given a set of numbers that might contain duplicates, find all of its
distinct subsets.
*/

function findSubsets(nums) {
  nums.sort();

  const subsets = [];
  let start = 0, end = 0;

  subsets.push([]);

  for (let i = 0; i < nums.length; i++) {
    start = 0;

    if (i > 0 && nums[i] === nums[i - 1]) {
      start = end + 1;
    }

    end = subsets.length - 1;

    for (let j = start; j <= end; j++) {
      const currSubset = subsets[j].slice();
      currSubset.push(nums[i]);
      subsets.push(currSubset);
    }
  }

  return subsets;
}