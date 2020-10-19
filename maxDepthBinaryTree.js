/*
Find Max Depth of a Binary Tree
*/

const maxDepth = (root) => {
  if (root === null) { return 0; }

  let maxDepth = 0;

  let recurse = (node, depth) => {
    if (depth > maxDepth) {
      maxDepth = depth;
    }

    if (node.left === null && node.right === null) {
      return;
    }

    if (node.left !== null) {
      recurse(node.left, depth + 1);
    }

    if (node.right !== null) {
      recurse(node.right, depth + 1);
    }
  }

  recurse(root, 1);

  return maxDepth;
}