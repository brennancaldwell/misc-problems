/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr

Find Level Successor

Given a binary tree and a node, find the level order successor of the given
node in the tree. The level order successor is the node that appears right
after the given node in the level order traversal.
*/

function findSuccessor(root, key) {
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    if (current.val === key) break;
  }

  return queue.length ? queue.shift() : null;
}