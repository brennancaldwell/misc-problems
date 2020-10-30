/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A

We are given an unsorted array containing ‘n+1’ numbers taken from the
range 1 to ‘n’. The array has only one duplicate but it can be repeated
multiple times. Find that duplicate number without using any extra space.
You are, however, allowed to modify the input array.
*/

const findDuplicate = (nums) => {
  let i = 0;

  while (i < nums) {
    if (nums[i] !== i + 1) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        return nums[i]
      }
    } else {
      i++;
    }
  }

  return -1;
}

/*
Parsing through this... the key here is first we check that our current
number does not equal the current index. If not, we find what's in the slot
at the index indicated by that number. If those two array items are not the
same, we swap. If, however, they are the same, we've found our duplicate: we
return that number.

You can also use the fast/slow pointer method
*/