/*
Leetcode: 1046. Last Stone Weight : https://leetcode.com/problems/last-stone-weight/

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.
Suppose the stones have weights x and y with x <= y.  The result of this
smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of
weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone
(or 0 if there are no stones left.)



Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the
value of last stone.


Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

const lastStoneWeight = (stones) => {
  let maxHeap = new MaxHeap();
  for (let i = 0; i < stones.length; i++) {
    maxHeap.insert(stones[i]);
  }

  while (maxHeap.size() > 1) {
    let rockA = maxHeap.remove();
    let rockB = maxHeap.remove();
    if (rockA !== rockB) {
      maxHeap.insert(Math.abs(rockA - rockB));
    }
  }
  return maxHeap.size() ? maxHeap.remove() : 0;
}

class MaxHeap {
  constructor() {
    this.store = [null];
  }

  insert(value) {
    this.store.push(value);

    let childIndex = this.store.length - 1;
    let parentIndex = Math.floor(childIndex / 2);

    while(this.store[parentIndex] && this.store[childIndex] > this.store[parentIndex]) {
      [this.store[parentIndex], this.store[childIndex]] = [this.store[childIndex], this.store[parentIndex]];
      childIndex = parentIndex;
      parentIndex = Math.floor(childIndex / 2);
    }
  }

  remove() {
    if (this.store.length < 3) {
      let value = this.store.pop();
      this.store[0] = null;
      return value;
    }
    let value = this.store[1];
    this.store[1] = this.store.pop();
    let currentIndex = 1;
    let [left, right] = [2 * currentIndex, 2 * currentIndex + 1];
    let currentChildIndex;
    if (this.store[right] && this.store[left] < this.store[right]) {
      currentChildIndex = right;
    } else {
      currentChildIndex = left;
    }

    while(this.store[currentChildIndex] && this.store[currentChildIndex] > this.store[currentIndex]) {
      [this.store[currentIndex], this.store[currentChildIndex]] = [this.store[currentChildIndex], this.store[currentIndex]];

      currentIndex = currentChildIndex;
      let [left, right] = [2 * currentIndex, 2 * currentIndex + 1];
      if (this.store[right] && this.store[left] < this.store[right]) {
        currentChildIndex = right;
      } else {
        currentChildIndex = left;
      }
    }

    return value;
  }

  size() {
    return this.store.length - 1;
  }
}

/*
Here, built a MaxHeap class. Could more easily have solved this problem
using arrays, but that would have necessitated sorting the whole array with
each new rock addition.
*/