/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO

Sliding Window Median

Given an array of numbers and a number ‘k’, find the median of all the ‘k’
sized sub-arrays (or windows) of the array.

Example 1:

Input: nums=[1, 2, -1, 3, 5], k = 2
Output: [1.5, 0.5, 1.0, 4.0]
Explanation: Lets consider all windows of size ‘2’:

[1, 2, -1, 3, 5] -> median is 1.5
[1, 2, -1, 3, 5] -> median is 0.5
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 4.0

Example 2:

Input: nums=[1, 2, -1, 3, 5], k = 3
Output: [1.0, 2.0, 3.0]
Explanation: Lets consider all windows of size ‘3’:

[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 2.0
[1, 2, -1, 3, 5] -> median is 3.0
*/

const Heap = require('collections/heap');

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  findSlidingWindowMedian(nums, k) {
    const result = new Array(nums.length - k + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      if (this.maxHeap.length === 0 || this.maxHeap.peek() >= nums[i]) {
        this.maxHeap.push(nums[i]);
      } else {
        this.minHeap.push(nums[i]);
      }

      this.heapRebalance();

      if (i - k + 1 >= 0) {
        if (this.maxHeap.length === this.minHeap.length) {
          result[i - k + 1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
          result[i - k + 1] = this.maxHeap.peek();
        }


        const currentElement = nums[i - k + 1];
        if (currentElement <= this.maxHeap.peek()) {
          this.maxHeap.delete(currentElement);
        } else {
          this.minHeap.delete(currentElement);
        }

        this.heapRebalance();
      }
    }

    return result;
  }

  heapRebalance() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}

let slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.findSlidingWindowMedian([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.findSlidingWindowMedian([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);

/*
Time: O(n * k) (elements times length of sliding window)
Space: O(k) -- we only ever hold as many elements as indicated by K

Similar to finding the median of a number stream, the idea here is to keep
track of our numbers in two heaps, adding medians to the results array once
the sliding window is K elements long, removing earlier elements as they
fall out of the window.

A note on heap deletion: Deleting an intermediary number works almost the
same as deleting the root, with one crucial difference. You replace the
deleted item with the final item in the heap and then consider both parents
and children. If (in the case of a min heap) your final item is smaller than
the parent, you "bubble up" until you find the right place. If it's larger
than the children, we "bubble down".
*/