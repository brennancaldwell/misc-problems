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
    result.push(queue[levelLength - 1];

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

/*
Solution code a little cleaner, but functionally the same:

function treeRightView(root) {
  const result = [], queue = [];
  if (root === null) return result;

  queue.push(root);

  while (queue.length) {
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (i === levelSize - 1) {
        result.push(currentNode);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return result;
}
*/