/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v

Given a binary tree, connect each node with its level order successor. The
last node of each level should point to the first node of the next level.
*/

function connectAllSiblings(root) {
  const queue = [];
  let previousNode = null;

  queue.push(root);

  while(queue.length) {
    const current = queue.shift();

    if (previousNode) {
      previousNode.next = current;
    }

    previousNode = current;

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  previousNode.next = null;
}