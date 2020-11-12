/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO

Minimum Depth BT

Find the minimum depth of a binary tree. The minimum depth is the number of
nodes along the shortest path from the root node to the nearest leaf node.
*/

function findMinimumDepth(root) {
  if (root === null) return -1;

  const queue = [];
  let depth = 0;
  queue.push(root);

  while(queue.length) {
    depth += 1;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift();

      if (!current.left && !current.right) {
        return depth;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}