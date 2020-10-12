/* 283. Move Zeroes https://leetcode.com/problems/move-zeroes/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note: You must do this in-place without making a copy of the array. Minimize the total number of operations.

*/

/*
I: Array, of numbers
O: Array, of numbers, zeroes moved to the end
C: In-place, without making a copy
   Maintain relative order.
   Minimize total number of operations.
E: Empty array --> empty array
   Array without zeroes --> return array


O(n^2) Solution
[0, 1, 0, 3, 12]
^
Increment a counter
Splice out the zero --> splice O(n) O(n^2)
[1, 0, 3, 12]
[1, 3, 12]
counter --> push counter # of zeroes into the array
return array

O(n)
variable that tracks the current position of non-zero numbers
[1, 2, 3, 4, 8, 0, 8]
Iterate thru the array, every time there is a zero, I"m going to replace it with the next number in the array

position variable that tracks current position of non-zero
6
[1, 2, 3, 8, 4, 0, 0]
6
if the index is not a zero,
  replace current position with that number  at position
  increment position

loop using position variable
  while that position variable is less than the length of the array
  replace the array item at position with a zero.
  increment our position variable

return array
*/

const moveZeroes = (nums) => {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }

  return nums;
}