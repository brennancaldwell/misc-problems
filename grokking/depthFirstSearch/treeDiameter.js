/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xVV1jA29YK9

Tree Diameter

Given a binary tree, find the length of its diameter. The diameter of a
tree is the number of nodes on the longest path between any two leaf nodes.
The diameter of a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in the
given tree.

*/

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  findDiameter(root) {
    const context = this;
    function diameterRecursive(node) {
      if (!node) return 0;
      const left = diameterRecursive(node.left),
            right = diameterRecursive(node.right);
      context.treeDiameter = Math.max(context.treeDiameter, left + right + 1);
      if (node === root) {
        return context.treeDiameter;
      } else {
        return Math.max(left, right) + 1;
      }
    };
    return diameterRecursive(root);
  }
};

/*
Solution code is similarly ponderous from a time perspective.
O(n) Time, O(n) space

My solution is a bit clunky: assigning 'context', returning something
different if the current node is the root.

Solution code solves this by separating out the recursive function,
which will maintain its this binding.

The findDiameter function therefore merely calls the recursive function
and returns this.treeDiameter.
*/