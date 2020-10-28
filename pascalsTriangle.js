/*
Leetcode: https://leetcode.com/problems/pascals-triangle/

Given a non-negative integer numRows, generate the first numRows of
Pascal's triangle.
*/

const generate = (numRows) => {
  if (numRows === 0) { return []; }
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let currArray = new Array(i + 1),
    left = 1,
    right = currArray.length - 2,
    oldArray = result[result.length - 1],
    oldLeft = 0,
    oldRight = oldArray.length - 1;

    currArray[0] = 1;
    currArray[currArray.length - 1] = 1;

    while (left <= right) {
      currArray[left] = oldArray[oldLeft] + oldArray[oldLeft + 1];
      currArray[right] = oldArray[oldRight] + oldArray[oldRight - 1];
      left++;
      right--;
      oldLeft++;
      oldRight--;
    }

    result.push(currArray);
  }

  return result;
}