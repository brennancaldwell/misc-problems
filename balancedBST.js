/*
Leetcode: https://leetcode.com/problems/balanced-binary-tree/submissions/

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in
height by no more than 1.
*/

const isBalanced = (root, depth = 0) => {
  if (node === null) return true;
  let leftHeight = height(root.left, depth + 1);
  let rightHeight = height(root.right, depth + 1);
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return isBalanced(root.left, depth + 1) && isBalanced(root.right, depth + 1);
};

const height = (node, depth) => {
  if (node === null) return depth - 1;
  return Math.max(height(node.left, depth + 1), height(node.right, depth + 1));
};