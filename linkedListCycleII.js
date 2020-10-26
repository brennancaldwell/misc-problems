/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
*/

const detectCycle = (head) => {
  let fast = head, slow = head;
  while(fast) {
    fast = fast.next;
    slow = slow.next;
    if (fast) fast = fast.next;
    if (slow === fast) { break; }
  }
  if (fast === null) return null;

  slow = head;

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
}

/*
Had to reference the solution code, but I had pretty much this entire flow
down except line 15: I reset both slow and fast to head, then tried setting
slow to head and fast to head.next. The key is to keep "fast" *within the
cycle* so that slow catches up to it at precisely the intersection.
*/