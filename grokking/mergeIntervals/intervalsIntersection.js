/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D

Intervals Intersection

Given two lists of intervals, find the intersection of these two lists.
Each list consists of disjoint intervals sorted on their start time.
*/

const merge = function(intervals_a, intervals_b) {
  let result = [], i = 0, j = 0;
  while (i < intervals_a.length && j < intervals_b.length) {

    let aStart = intervals_a[i].start,
    aEnd = intervals_a[i].end,
    bStart = intervals_b[j].start,
    bEnd = intervals_b[j].end;

    if ((aStart <= bEnd && aStart >= bStart) || (bStart <= aEnd && bStart >= aStart)) {
      let start = Math.max(aStart, bStart);
      let end = Math.min(aEnd, bEnd);
      result.push(new Interval(start, end));
    }

    aEnd < bEnd
    ? i++
    : j++;
  }

  return result;
};

/*
My solution close to the solution code: major difference in how we handle
advancing of index. Here, you advance whichever interval ended first.

Time O(n)
Space O(n)
*/