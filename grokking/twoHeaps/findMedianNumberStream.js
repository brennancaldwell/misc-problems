/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4

Design a class to calculate the median of a number stream. The class should
have the following two methods:

1. insertNum(int num): stores the number in the class
2. findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be
the average of the middle two numbers.
*/

const Heap = require('collections/heap');

class MedianOfStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  insertNum(num) {
    if (this.maxHeap.length === 0 || num <= this.maxHeap.peek()) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    }
    return this.maxHeap.peek();
  }
};

var medianOfAStream = new MedianOfStream()
medianOfAStream.insertNum(3)
medianOfAStream.insertNum(1)
console.log(`The median is: ${medianOfAStream.findMedian()}`)
medianOfAStream.insertNum(5)
console.log(`The median is: ${medianOfAStream.findMedian()}`)
medianOfAStream.insertNum(4)
console.log(`The median is: ${medianOfAStream.findMedian()}`)

/*
Time Complexity of Insert: O(log n)
Time Complexity of Find Median: O(1)
Space Complexity: O(n)

Took a second to wrap the head around, but the idea is we use two heaps
to track our numbers: the smaller half in a maxHeap, the larger half in a
minHeap. If we have an odd number of numbers, we make sure to keep the extra
number in our maxHeap -- its topmost number will be our median. If ever our
maxHeap has two more numbers than our minHeap, we transfer the topmost
number to the minHeap. And if at any point the minHeap becomes larger than
the maxHeap, we transfer the topmost number of the minHeap to the maxHeap.

That way, insertion will always be O(log n) and median access will be
constant.
*/