/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn

All Paths For Sum

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such
that the sum of all the node values of each path equals ‘S’.
*/

const findPaths = (root, sum) => {
  const allPaths = [];
  findPathsRecursion(root, sum, [], allPaths);
  return allPaths;
}

const findPathsRecursion = (node, sum, currentPath, allPaths) => {
  if (!node) return;
  currentPath.push(node.value);

  if (node.value === sum && !node.left && !node.right) {
    allPaths.push(currentPath);
  } else {
    findPathsRecursion(node.left, sum - node.value, currentPath.slice(), allPaths);
    findPathsRecursion(node.right, sum - node.value, currentPath.slice(), allPaths);
  }
}