/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RLwKZWgMJ1q

For ‘K’ employees, we are given a list of intervals representing the
working hours of each employee. Our goal is to find out if there is a free
interval that is common to all employees. You can assume that each list of
employee working hours is sorted on the start time.
*/

const Heap = require('collections/heap');

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval;
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex;
  }
}

function findEmployeeFreeTime(schedule) {
  let n = schedule.length, result = [];

  if (schedule === null || n === 0) {
    return result;
  }

  let minHeap = new Heap([], null, (a, b) => a.interval.start < b.interval.start);

  for (let i = 0; i < schedule.length; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }

  let prev = minHeap.peek().interval;

  while (minHeap.length > 0) {
    const current = minHeap.pop();

    if (prev.end < current.interval.start) {
      result.push(new Interval(prev.end, current.interval.start));
      prev = current;
    } else {
      if (prev.end < current.end) {
        prev = current;
      }
    }

    const employeeSched = schedule[current.employeeIndex];
    if (employeeSched.length > current.intervalIndex + 1) {
      minHeap.push(new EmployeeInterval(employeeSched[current.intervalIndex + 1], current.employeeIndex, current.intervalIndex + 1));
    }
  }

  return result;
}

/*
Time O(n log k), where n is the number of intervals, and k is the number of
employees
Space O(k)

We use a minHeap to keep track of employee intervals organized by the end
time. We begin by inserting every employee's first appointment of the day,
popping each interval off in turn and comparing the current interval's start
to the previous interval's end. Because each individual employee schedule is
already sorted by start time, we know that any gaps we find between the
greatest end time so far recorded and the next start time will constitute a
block of free time for all employees. Notice also we create an
EmployeeInterval class in order to keep track of the indices of each
employee as well as the indices of the interval in question.
*/