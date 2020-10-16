/*
Leetcode: 1. Two Sum: https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      }
      map.set(nums[i], i);
  }
}

/*
HashMap implementation that runs in 80ms.
Time: O(n);
Space: O(n);

Nested loop implementation runs in 136 ms.
Time: O(n^2);
Space: O(1);
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let y = i + 1; y < nums.length; y++) {
            if (nums[i] + nums[y] === target) {
                return [i, y];
            }
        }
    }
};
*/
