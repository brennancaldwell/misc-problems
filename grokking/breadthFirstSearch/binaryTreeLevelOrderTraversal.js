/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz

Given a binary tree, populate an array to represent its level-by-level
traversal. You should populate the values of all nodes of each level from
left to right in separate sub-arrays.
*/

function traverse(root) {

  if (root === null) return root;

  let result = [], queue = [];

  queue.push([root, 0]);

  while (queue.length) {
    let currentDuple = queue.shift();
    currentNode = currentDuple[0],
    currVal = currentNode.value,
    currDepth = currentDuple[1];

    result[currDepth] === undefined
    ? result[currDepth] = [currVal]
    : result[currDepth].push(currVal);

    if (currentNode.left) {
      queue.push([currentNode.left, currDepth + 1]);
    }

    if (currentNode.right) {
      queue.push([currentNode.right, currDepth + 1]);
    }
  }

  return result;
}