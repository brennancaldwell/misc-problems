/*
Leetcode Medium: Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each
integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Follow-ups:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?
*/

var findDuplicate = function(nums) {
  const noDuplicate = {};
  for (let i = 0; i < nums.length; i++) {
      if (noDuplicate[nums[i]]) {
          return nums[i];
      }
      noDuplicate[nums[i]] = true;
  }
  return -1;
};

/*
Time complexity: O(n)
Space complexity: O(n)

To achieve O(1) space complexity, use Floyd's algorithm, which reduces the
problem to a Linked List, leaning into the fact that we can use the array
number values as indices. Two pointers, a tortoise and a hare, are first set
to discover an intersection point within the cycle created by a duplicate
value. Then, reduce the hare's "speed" to match that of the tortoise, and
eventually the two will intersect at the duplicate value.

const findDup = (nums) => {
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  tortoise = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare;
}
*/