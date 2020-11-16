/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY

Given a binary tree and a number ‘S’, find if the tree has a path from
root-to-leaf such that the sum of all the node values of that path equals
‘S’.
*/

function hasPath(root, sum) {
  if (!root) return false;

  sum -= root.value;

  if (!root.left && !root.right && sum === 0) return true;

  return hasPath(root.left, sum) || hasPath(root.right, sum);
};

/*
Solution code has one fewer step: if we subtract in the recursive calls,
all we have to check is if the current root value equals the current sum.

function hasPath(root, sum) {
  if (!root) return false;

  if (root.value === sum && !root.left && !root.right) return true;

  return hasPath(root.left, sum - root.value) || hasPath(root.right, sum - root.value);
}
*/