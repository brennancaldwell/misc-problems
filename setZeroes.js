/*
Leetcode: 73. Set Matrix Zeroes

Given an m x n matrix. If an element is 0, set its entire row and column to
0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

function setZeroes(matrix) {
  const rows = {}, columns = {};
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        rows[r] = true;
        columns[c] = true;
      }
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (rows[r] || columns[c]) {
        matrix[r][c] = 0;
      }
    }
  }
  return matrix;
};