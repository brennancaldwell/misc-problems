/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 15. 3Sum: https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums
such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.
*/

const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let x = 0; x < nums.length - 2; x++) {
    const a = nums[x];

    if (a > 0) { return result; }
    if (a === nums[x - 1]) { continue; }

    let y = x + 1;
    let z = nums.length - 1;

    while (y < z) {
      const b = nums[y];
      const c = nums[z];

      if (a + b + c === 0) {
        result.push([a, b, c]);
      }

      if (a + b + c >= 0) {
        while (nums[z - 1] === c) { z--; }
        z--;
      }

      if (a + b + c <= 0) {
        while (nums[y + 1] === b) { y++; }
        y++;
      }
    }
  }
  return result;
};

/*
Time Complexity: O(n^2).

Two-pointer solution, far more optimized than the naive, brute-force, three-nested-loops option. Note: very important lines 34 and 39 are also *equal to*: will both decrement z and increment y when we've found a solution set.
*/