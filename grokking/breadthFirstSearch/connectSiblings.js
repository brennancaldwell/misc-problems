/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03

Given a binary tree, connect each node with its level order successor. The
last node of each level should point to a null node.
*/

function connectLevelOrderSiblings(root) {
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();
      if (i < levelLength - 1) {
        current.next = queue[0];
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}