/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz

Given a binary tree, populate an array to represent its level-by-level
traversal. You should populate the values of all nodes of each level from
left to right in separate sub-arrays.
*/

function traverse(root) {

  let result = [], queue = [];

  if (root === null) return result;

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

/*
Similar implementation in solution code

function traverse(root) {
  let result = [];
  if (root === null) return result;

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length, currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      currentLevel.push(currentNode.val)

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}

*/