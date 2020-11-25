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
    console.log(subsets)
  }
  return subsets;
}


console.log(findSubsets([1, 3]))
console.log(findSubsets([1, 5, 3]))

/*
Time O(n * 2^n)
Space: O(n * 2^n)
*/