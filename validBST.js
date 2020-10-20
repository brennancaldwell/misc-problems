/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

*/

/*
 * @param {TreeNode} root
 * @return {boolean}
 */


/* 98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true


Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/


const isValidBST = (root) => {
  const traverse = (node, lower, upper) => {
      if (node === null) {
          return true;
      }


      if (node.left !== null && node.val <= node.left.val) {
          return false;
      }


      if (node.right !== null && node.val >= node.right.val) {
          return false;
      }

      if (upper !== null && node.val >= upper) {
          return false;
      }

      if (lower !== null && node.val <= lower) {
        return false;
    }

      return traverse(node.left, lower, node.val) && traverse(node.right, node.val, upper);
  }

  return traverse(root, null, null);
};

/*
Somewhat inefficient solution, but it gets the job done. Particularly proud
of using tracking objects to keep track of greater than/less than properties
further down the tree branches.

const isValidBST = (root) => {
  const traverse = (node, tracker) => {
      if (node === null) {
          return true;
      }


      if (node.left !== null && node.val <= node.left.val) {
          return false;
      }


      if (node.right !== null && node.val >= node.right.val) {
          return false;
      }

      if (node.val >= tracker.lessThan || node.val <= tracker.greaterThan) {
          return false;
      }

      let trackerL = Object.assign({ lessThan: node.val }, tracker);
      let trackerR = Object.assign({ greaterThan: node.val }, tracker);


      return traverse(node.left, trackerL) && traverse(node.right, trackerR);
  }

  return traverse(root, {});
};

Solution code has revealed (of course) -- why use an object when you could
simply use lower and upper limit variables?
Changing the code as such made things substantially faster.

*/