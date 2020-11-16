/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY

Given a binary tree and a number ‘S’, find if the tree has a path from
root-to-leaf such that the sum of all the node values of that path equals
‘S’.
*/

function hasSum(root, sum) {
  if (!root) return false;

  sum -= root.value;

  if (!root.left && !root.right && sum === 0) return true;

  return hasPath(root.left, sum) || hasPath(root.right, sum);
}