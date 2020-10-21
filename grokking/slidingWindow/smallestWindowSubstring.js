/*
Grokking: Problem Challenge 3: Smallest Window Containing Substring
https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
*/

const find_substring = function(str, pattern) {
  let output = '', start = 0, match = 0, track = {};

  for (let i = 0; i < pattern.length; i++) {
    track[pattern[i]] === undefined
    ? track[pattern[i]] = 1
    : track[pattern[i]]++;
  }

  for (let end = 0; end < str.length; end++) {
    if (track[str[end]] !== undefined) {
      track[str[end]]--;
      if (track[str[end]] === 0) {
        match++;
      }
    }

    while (match === Object.keys(track).length) {
      if (output === '' || output.length > (end - start + 1)) {
        output = str.slice(start, end + 1);
      }

      if (track[str[start]] !== undefined) {
        if (track[str[start]] === 0) {
          match--;
        }
        track[str[start]]++;
      }

      start++;
    }
  }
  return output;
}