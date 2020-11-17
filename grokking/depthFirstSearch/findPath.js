/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn

Given a binary tree and a number sequence, find if the sequence is present
as a root-to-leaf path in the given tree.
*/

function findPath(root, sequence) {
  if (!root || root.value !== sequence[0]) return false;
  if (sequence.length === 1 && !root.left && !root.right) return true;
  return findPath(root.left, sequence.slice(1)) || findPath(root.right, sequence.slice(1));
};