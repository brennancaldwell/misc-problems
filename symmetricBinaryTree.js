/*
Leetcode: 101. Symmetric Tree: https://leetcode.com/problems/symmetric-tree/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric
around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
*/

const isSymmetric = (root) => {
  let compare = (nodeOne, nodeTwo) => {
    if (nodeOne === null && nodeTwo === null) {
      return true;
    }

    if (nodeOne === null || nodeTwo === null) {
      return false;
    }

    return nodeOne.val === nodeTwo.val
          && compare(nodeOne.left, nodeTwo.right)
          && compare(nodeOne.right, nodeTwo.left);

  }

  return compare(root.left, root.right);
}

/*
Stole this solution (my brute force one was going to involve making
  solution strings and then comparing them)

  I also like how this one makes use of comparison operators.
*/