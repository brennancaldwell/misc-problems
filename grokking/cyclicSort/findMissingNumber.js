/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9

We are given an array containing ‘n’ distinct numbers taken from the range
0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’
numbers, find the missing number.
*/

const findMissingNumber = (nums) => {
  let i = 0, n = nums.length;

  while (i < n) {
    const num = nums[i];
    if (num < n && nums[i] !== nums[num]) {
      [nums[i], nums[num]] = [nums[num], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }

  return n;
}

/*
Time O(n)
Space O(1)

After swapping, one of two things will be true: either the number n will
take the place of the missing number or n will be the number that is missing.

*/