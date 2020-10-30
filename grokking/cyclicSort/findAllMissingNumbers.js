/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK

We are given an unsorted array containing numbers taken from the range 1 to
‘n’. The array can have duplicates, which means some numbers will be
missing. Find all those missing numbers.

*/

const findAllMissing = (nums) => {
  let missing = [], i = 0;

  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] !== nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missing.push(i + 1);
    }
  }

  return missing;
}