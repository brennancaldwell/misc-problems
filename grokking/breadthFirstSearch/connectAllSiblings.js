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

/*
Looks like in the solution code they modified the initial tree structure
to include a "next" param set to "null" -- whereas what I do here is
define the next param for each tree node. I can see why that would be
best practice -- though in my code it would eliminate at most one line (32).
*/