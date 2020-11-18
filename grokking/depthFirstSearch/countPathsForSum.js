/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or

Given a binary tree and a number ‘S’, find all paths in the tree such that
the sum of all the node values of each path equals ‘S’. Please note that
the paths can start or end at any node but all paths must follow direction
from parent to child (top to bottom).
*/

function countPaths(root, S, currentPath = []) {
  if (!root) return 0;

  currentPath.push(root.value);

  let pathSum = 0, pathCount = 0;

  for (let i = currentPath.length - 1; i >=0; i--) {
    pathSum += currentPath[i];
    if (pathSum === S) pathCount++;
  }

  pathCount += countPaths(root.left, S, currentPath);
  pathCount += countPaths(root.right, S, currentPath);

  currentPath.pop();

  return pathCount;
}