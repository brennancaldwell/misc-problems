/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B89q6NpX0Vx

Path With Max Sum

Find the path with the maximum sum in a given binary tree. Write a function
that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and
doesn’t necessarily pass through the root. The path must contain at least
one node.
*/

function findMaximumPathSum(root) {
  let max = -Infinity;
  function pathSumRecursive(node) {
    if (!node) return 0;
    const left = pathSumRecursive(node.left),
          right = pathSumRecursive(node.right),
          current = left + right + node.value;
    max = Math.max(max, current);
    if (node === root) return max;
    return Math.max(left, right) + node.value;
  }
  return pathSumRecursive(root);
};