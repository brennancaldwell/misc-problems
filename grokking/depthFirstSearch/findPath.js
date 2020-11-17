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

/*
Solution code uses a helper recursive function that uses index of sequence.
Rather than reproducing, I'll modify my code to use that rather than slice.

function findPath(root, sequence, index = 0) {
  if (!root || root.value !== sequence[index]) return false;
  if (index >= sequence.length) return false;
  if (!root.left && !root.right && index === sequence.length - 1) return true;
  return findPath(root.left, sequence, index + 1) || findPath(root.right, sequence, index + 1)
}
*/