/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG

Given an array of intervals representing ‘N’ appointments, find out if a
person can attend all the appointments.
*/

const canAttendAllAppointments = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    if (overlap(intervals[i - 1], intervals[i])) {
      return false;
    }
  }
  return true;
};

const overlap = (intervalA, intervalB) => {
  return intervalA.end < intervalB.start;
};

/*
Time O(n log n)
Space O(1)
*/
