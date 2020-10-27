/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM

Given a list of non-overlapping intervals sorted by their start time,
insert a given interval at the correct position and merge all necessary
intervals to produce a list that has only mutually exclusive intervals.
*/

const insert = function(intervals, new_interval) {
  let merged = [], i = 0;

  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i++;
  }

  merged.push(new_interval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

/*
Time O(n)
Space O(n)
*/