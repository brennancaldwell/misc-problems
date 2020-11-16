/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69

Given a binary tree where each node can only have a digit (0-9) value, each
root-to-leaf path will represent a number. Find the total sum of all the
numbers represented by all paths.
*/

function findSumOfPathNumbers(root, sum = 0) {
  if (!root) return 0;
  sum += root.value;
  if (!root.left && !root.right) return sum;
  return findSumOfPathNumbers(root.left, sum * 10) + findSumOfPathNumbers(root.right, sum * 10);
}

/*
Time Complexity: O(n)
Space Complexity: O(n) --> recursion stack, worst case
*/