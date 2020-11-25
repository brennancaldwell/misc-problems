/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG

Given a set with distinct elements, find all of its distinct subsets.

*/

function findSubsets(nums) {
  const subsets = [];
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i], n = subsets.length;
    for (let j = 0; j < n; j++) {
      const subset = subsets[j].slice();
      subset.push(current);
      subsets.push(subset);
    }
  }
  return subsets;
}

