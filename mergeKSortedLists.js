/*
Leetcode: 23. Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.


Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6


Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []


Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/

const mergeKSortedLists = (lists) => {
  if (lists.length === 0) return null;

  let minHeap = new MinHeap(), result, currentNode;
  lists.forEach(list => minHeap.insert(list));

  while (minHeap.size() > 0) {
    let node = minHeap.remove();
    if (node === null) continue;

    if (result === undefined) {
      result = new ListNode(node.val);
      currentNode = result;
    } else {
      currentNode.next = new ListNode(node.val);
      currentNode = currentNode.next;
    }

    if (node.next !== null) {
      minHeap.insert(node.next);
    }
  }

  return result === undefined ? null : result;
}

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

class MinHeap {
  constructor() {
    this.store = [null];
  }

  insert(node) {
    if (node === null) return;
    this.store.push(node);

    let childIndex = this.store.length - 1;
    let parentIndex = Math.floor(childIndex / 2);

    while (this.store[parentIndex] && this.store[parentIndex].val > this.store[childIndex].val) {
      [this.store[parentIndex], this.store[childIndex]] = [this.store[childIndex], this.store[parentIndex]];
      childIndex = parentIndex;
      parentIndex = Math.floor(childIndex / 2);
    }
  }

  remove() {
    if (this.store.length < 3) {
      let removed = this.store.pop();
      this.store[0] = null;
      return removed;
    }

    let value = this.store[1];
    this.store[1] = this.store.pop();

    let parentIndex = 1;
    let leftChildIndex = parentIndex * 2;
    let rightChildIndex = leftChildIndex + 1;

    let smallerChild;
    if (this.store[rightChildIndex] !== undefined && this.store[leftChildIndex].val > this.store[rightChildIndex].val) {
      smallerChild = rightChildIndex;
    } else {
      smallerChild = leftChildIndex;
    }

    while (this.store[smallerChild] !== undefined && this.store[smallerChild].val < this.store[parentIndex].val) {
      [this.store[parentIndex], this.store[smallerChild]] = [this.store[smallerChild], this.store[parentIndex]];
      parentIndex = smallerChild;
      leftChildIndex = parentIndex * 2;
      rightChildIndex = leftChildIndex + 1;
      if (this.store[rightChildIndex] && this.store[leftChildIndex].val > this.store[rightChildIndex].val) {
        smallerChild = rightChildIndex;
      } else {
        smallerChild = leftChildIndex;
      }
    }

    return value;
  }

  size() {
    return this.store.length - 1;
  }
}