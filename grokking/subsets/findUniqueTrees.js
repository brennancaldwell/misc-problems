/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xVQyDZBMpKE

Find Unique Trees Recursive

Given a number ‘n’, write a function to return all structurally unique
Binary Search Trees (BST) that can store values 1 to ‘n’?
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findUniqueTrees(n) {
  if (n <= 0) return [];
  return findTreesRecursive(1, n);
}

function findTreesRecursive(start, end) {
  const result = [];

  if (start < end) {
    result.push(null);
    return result;
  }

  for (let i = start; i < end + 1; i++) {
    const left = findTreesRecursive(0, i - 1);
    const right = findTreesRecursive(i + 1, end);
    for (let x = 0; x < left.length; x++) {
      for (let y = 0; y < right.length; y++) {
        const root = new TreeNode(i, left[x], right[y]);
        result.push(root);
      }
    }
  }

  return result;
}