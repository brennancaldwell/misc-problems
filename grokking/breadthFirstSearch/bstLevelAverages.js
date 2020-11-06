/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW

Given a binary tree, populate an array to represent the averages of all of
its levels.
*/

function bstLevelAverages (root) {
  const result = [], queue = [];

  queue.push(root);

  while (queue.length) {
    const levelLength = queue.length;
    let sum = 0;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      sum += node.value;
    }

    result.push(sum / levelLength);
  }

  return result;
}