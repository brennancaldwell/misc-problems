/*
Merge two sorted linked lists and return it as a new sorted
list. The new list should be made by splicing together the nodes
of the first two lists.

Leetcode: https://leetcode.com/problems/merge-two-sorted-lists/
*/

const mergeTwoLists = (l1, l2) => {
  let result;
  let currentNode;
  let nodeOne = l1;
  let nodeTwo = l2;
  while (nodeOne !== null || nodeTwo !== null) {
    if (nodeOne !== null) {
      if (nodeTwo === null || (nodeOne.val < nodeTwo.val)) {
        let node = ListNode(nodeOne.val);
        nodeOne = nodeOne.next;
        if (result === undefined) {
          result = node;
          currentNode = node;
        } else {
          currentNode.next = node;
          currentNode = currentNode.next;
        }
        continue;
      }
    }

    if (nodeTwo !== null) {
      if (nodeOne === null || (nodeTwo.val <= nodeOne.val)) {
        let node = ListNode(nodeTwo.val);
        nodeTwo = nodeTwo.next;
        if (result === undefined) {
          result = node;
          currentNode = node;
        } else {
          currentNode.next = node;
          currentNode = currentNode.next;
        }
        continue;
      }
    }


  }

  return result ? result : null;
}

const ListNode = (val, next) => {
  const node = {};
  node.val = (val === undefined ? 0 : val);
  node.next = (next === undefined ? null : next);
  return node;
}