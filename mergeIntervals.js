/*
Leetcode: https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge
them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered
overlapping.
NOTE: input types have been changed on April 15, 2019. Please
reset to default code definition to get new method signature.

Constraints:

intervals[i][0] <= intervals[i][1]
*/

const mergeIntervals = (intervals) => {
  const combine = (dupleA, dupleB) => {
    return [Math.min(dupleA[0], dupleB[0]), Math.max(dupleA[1], dupleB[1])];
  }

  const overlap = (dupleA, dupleB) => {
    return dupleA[1] >= dupleB[0];
  }

  intervals.sort((dupleA, dupleB) => dupleA[0] - dupleB[0]);

  let i = 1;

  while (i < intervals.length) {
    if (overlap(intervals[i - 1], intervals[i])) {
      intervals.splice(i - 1, 2, combine(intervals[i - 1], intervals[i]));
    } else {
      i++;
    }
  }

  return intervals;
}

/*
Much better time complexity (O(n log n)) than the brute force solution I had at first figured out.

A good thing to keep in mind: if you're only comparing two
elements at a time, no need to use nested loops: simply refer to
i and i - 1 within a single loop. Particularly love the elegant
way in which this handles the possibility of 3+ merging duples
(just by handling them two at a time rather than trying to
attempt all merges in one step);
*/