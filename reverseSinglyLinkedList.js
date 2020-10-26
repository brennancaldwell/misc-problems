/*
Reverse a singly linked list.
*/

const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let listHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return listHead;
}


/*
Above, recursive:
O(n) time // 84ms, 53.17%
O(n) space (recursion / implicit stack space) 40.4MB / 29.86%

O(n) time // 84ms
O(1) space // 40.6
Iterative approach! 3 pointers.
const reverseList = (head) => {
  let next = null, curr = head, prev = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
*/