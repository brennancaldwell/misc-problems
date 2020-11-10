/*
Leetcode: 236. Lowest Common Ancestor of Binary Tree

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

Given a binary tree, find the lowest common ancestor (LCA) of two given
nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common
ancestor is defined between two nodes p and q as the lowest node in T that
has both p and q as descendants (where we allow a node to be a descendant
  of itself).”
*/

function lowestCommonAncestor(root, p, q) {
  let result = null;

  (function traverse(node) {
    if (!contains(node, p) || !contains(node, q)) {
      return;
    } else {
      result = node;
      traverse(node.left);
      traverse(node.right);
    }
  })(root);

  return result;
}

function contains(root, node) {
  if (root === null) return false;
  if (root === node) return true;
  return contains(root.left, node) || contains(root.right, node);
}