/*
Grokking: Problem Challenge 2: String Anagrams
https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM

Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.
*/

const find_string_anagrams = function(str, pattern) {
  let result_indexes = [], start = 0, match = 0, track = {};
  for (let i = 0; i < pattern.length; i++) {
    track[pattern[i]] === undefined
    ? track[pattern[i]] = 1
    : track[pattern[i]]++
  }

  for (let end = 0; end < str.length; end++) {
    if (track[str[end]]!== undefined) {
      track[str[end]]--;
      if (track[str[end]] === 0) {
        match++;
      }
    }

    if (match === Object.keys(track).length) {
      result_indexes.push(start);
    }

    if (end >= pattern.length - 1) {
      if (track[str[start]] !== undefined) {
        if (track[str[start]] === 0) {
          match--;
        }
        track[str[start]]++;
      }
      start++;
    }
  }
  return result_indexes;
};

/*
Exact same implementation, esentially, as permutationInAString.

Time Complexity O(N+M), where M is length of pattern, M is length of str.
Space: O(M)
*/