/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR

Longest Substring with Same Letters after Replacement (hard)

Given a string with lowercase letters only, if you are allowed to replace
no more than ‘k’ letters with any letter, find the length of the longest
substring having the same letters after replacement.
*/

const length_of_longest_substring = function(str, k) {
  let max = 0, start = 0, repeat = 0, track = {};

  for (let end = 0; end < str.length; end ++) {
    track[str[end]] === undefined
    ? track[str[end]] = 1
    : track[str[end]]++;

    repeat = Math.max(repeat, track[str[end]]);

    if ((end - start + 1) - repeat > k) {
      track[str[start]]--;
      start++;
    }

    max = Math.max(max, end - start + 1);
  }
  return max;
};

/*
I have walked through this a couple of times and my instincts aren't quite
caught up to the implementation. We track the max repeated letter at any
given point. Start and end will expand through repeats, and if ever the
window expands beyond the k allowance, we will increment start as well
to continue sliding forward.
*/
