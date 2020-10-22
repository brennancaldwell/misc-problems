/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/
mEEA22L5mNA

Remove Duplicates

Given an array of sorted numbers, remove all duplicates from it. You should
not use any extra space; after removing the duplicates in-place return the
length of the subarray that has no duplicate in it.
*/

const removeDuplicates = (arr) => {
  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[position] = arr[i];
    position++;
    while(arr[i + 1] === arr[i]) {
      i++;
    }
  }
  return position;
}

/*
O(n) time, O(1) space
Similar Implementation:
const remove_duplicates = (arr) => {
  let nextNonDuplicate = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDupliate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}
*/