/*
Grokking the Coding Interview: https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO

Given a string, find the length of the longest substring which has no
repeating characters.
*/

const nonRepeatSubstring = (str) => {
  let max = 0, start = 0, track = {};

  for (let end = 0; end < str.length; end++) {
    let right = str[end];

    if (track[right] !== undefined) {
      start = Math.max(start, track[right]);
    }

    track[right] = end;

    max = Math.max(max, start - end + 1);
  }
}

/*
The above executes in O(n) with O(1) space.
If the right character already exists in our tracker, we set
the start based on whichever is further along: the index over
from the last time we saw the current variable or the current
start (in the case that the previously-seen character has already
been excluded from our current window).


My first, naive solution, which is not the best as far as time/space complexity:

const non_repeat_substring = function(str) {
  // TODO: Write your code here
  let max = 0, start = 0, track = {};
  for (let end = 0; end < str.length; end++) {
    track[str[end]] === undefined
    ? track[str[end]] = 1
    : track[str[end]]++

    while (Object.values(track).reduce((a, b) => a+b) !== Object.keys(track).length) {
      track[str[start]]--;
      if (track[str[start]] === 0) {
        delete track[str[start]];
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
  }
  return max;
};

*/