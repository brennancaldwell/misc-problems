/*
Grokking the Coding Interview: https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80

Given a string, find the length of the longest substring in it with no more than K distinct characters.
*/

const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here
  let max = 0, start = 0, charMap = {};
  for (let end = 0; end < str.length; end++) {
    charMap[str[end]] === undefined
    ? charMap[str[end]] = 1
    : charMap[str[end]]++;

    while (Object.keys(charMap).length > k) {
      charMap[str[start]]--;
      if (charMap[str[start]] === 0) {
        delete charMap[str[start]];
      }
      start++;
    }

    max = Math.max(max, end - start + 1);

  }
  return max;
};

/*
Time: O(n)
Space: O(k), where K represents num of distinct characters as stored in obj
*/