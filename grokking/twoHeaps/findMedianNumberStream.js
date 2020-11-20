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