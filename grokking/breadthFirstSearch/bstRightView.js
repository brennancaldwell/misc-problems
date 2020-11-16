/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/B8nj5RB1LJo

Given a binary tree, return an array containing nodes in its right view.
The right view of a binary tree is the set of nodes visible when the tree
is seen from the right side.
*/

const treeRightView = (root) => {
  const result = [], queue = [];
  queue.push(root);

  while (queue.length) {
    const levelLength = queue.length;
    result.push(queue[levelLength - 1].value);

    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }

      if(current.right) {
        queue.push(current.right);
      }
    }
  }

  return result;
};