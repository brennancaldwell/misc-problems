/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0

Given a binary tree, populate an array to represent its zigzag level order
traversal. You should populate the values of all nodes of the first level
from left to right, then right to left for the next level and keep
alternating in the same manner for the following levels.
*/

function zigzagTraverse (root) {
  const result = [],
  queue = [];
  queue.push([root, 0]);

  while (queue.length) {
    const currentDuple = queue.shift(),
    currentNode = currentDuple[0],
    currentVal = currentNode.value,
    currentDepth = currentDuple[1];

    if (result[currentDepth] === undefined) {
      result[currentDepth] = [currentVal];
    } else if (currentDepth % 2 === 1) {
      result[currentDepth].unshift(currentVal);
    } else {
      result[currentDepth].push(currentVal);
    }

    if (currentNode.left) {
      queue.push([currentNode.left, currentDepth + 1]);
    }

    if (currentNode.right) {
      queue.push([currentNode.right, currentDepth + 1]);
    }
  }

  return result;
}