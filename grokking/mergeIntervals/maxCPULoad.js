/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93

Maximum CPU Load

We are given a list of Jobs. Each job has a Start time, an End time, and a
CPU load when it is running. Our goal is to find the maximum CPU load at
any time if all the jobs are running on the same machine.

*/

const Heap = require('collections/heap');


class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
};

const find_max_cpu_load = function(jobs) {
  jobs.sort((a, b) => a.start - b.start);
  let maxLoad = 0, currentLoad = 0, minHeap = new Heap([], null, (a, b) => b.end - a.end);
  for (let i = 0; i < jobs.length; i++) {
    while (minHeap.length > 0 && jobs[i].start >= minHeap.peek().end) {
      currentLoad -= minHeap.pop().cpu_load;
    }

    minHeap.push(jobs[i]);
    currentLoad += jobs[i].cpu_load;
    maxLoad = Math.max(maxLoad, currentLoad);
  }

  return maxLoad;
};

console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)