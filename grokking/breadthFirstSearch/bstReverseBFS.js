/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r

Given a binary tree, populate an array to represent its level-by-level
traversal in reverse order, i.e., the lowest level comes first. You should
populate the values of all nodes in each level from left to right in
separate sub-arrays.

*/

const traverse = (root) => {
  const result = [], queue = [];

  if (root === null) return result;

  queue.push(root);

  while (queue.length) {
    const level = queue.length, currLevel = [];

    for (let i = 0; i < level; i++) {
      const currentNode = queue.shift();
      currLevel.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.unshift(currLevel);
  }

  return result;
}