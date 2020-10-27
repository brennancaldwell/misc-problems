/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx

Given a list of intervals, merge all the overlapping intervals to produce a
list that has only mutually exclusive intervals.
*/

const merge = (intervals) => {
  if (intervals < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  const merged = [];
  let start = intervals[0].start, end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    interval = interval[i];
    if (interval.start < end) {
      end = Math.max(end, interval.end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));

  return merged;
}


class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


/*
const merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  let merged = [], i = 0;
  // TODO: Write your code here
  while (i < intervals.length) {
    if (intervals[i + 1] !== undefined && overlap(intervals[i], intervals[i + 1])) {
      intervals.splice(i, 2, fixOverlap(intervals[i], intervals[i + 1]));
    } else {
      merged.push(intervals[i]);
      i++;
    }
  }
  return merged;
};

const overlap = (intervalA, intervalB) => {
  return intervalB.start <= intervalA.end;
}

const fixOverlap = (intervalA, intervalB) => {
  intervalA.start = Math.min(intervalA.start, intervalB.start);
  intervalA.end = Math.max(intervalA.end, intervalB.end);
  return intervalA;
}
*/