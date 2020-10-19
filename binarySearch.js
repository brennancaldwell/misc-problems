/* 704. Binary Search: https://leetcode.com/problems/binary-search/

Given a sorted (in ascending order) integer array nums of n elements and a
target value, write a function to search target in nums. If target exists,
then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4


Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

*/

const search = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1;
  let midPt = Math.floor((left + right) / 2);

  if (target > nums[midPt]) {
    return search(nums, target, midPt + 1, right);
  } else if (target < nums[midPt]) {
    return search(nums, target, left, midPt - 1);
  } else {
    return midPt;
  }
}

/*
Recursive Solution:
Time Complexity: O(log n)
Space Complexity: O(1)
Speed: 76ms (faster than 88%)
Memory: 42 MB (less than 33%)

W/ While Loop (which I know is IIFE recursive, whatever)
Same time and space, but let's see how the V8 performs
Speed: 84 ms (faster than 50%)
Memory: 42 MB (less than 33%)

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midPt = Math.floor((left + right) / 2);
    if (target > nums[midPt]) {
      left = midPt + 1;
    } else if (target < nums[midPt]) {
      right = midPt - 1;
    } else {
      return midPt;
    }
  }

  return -1;
}

*/