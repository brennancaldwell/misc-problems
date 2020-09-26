/*
Given a string s, find the length of the longest substring without repeating characters.

I've solved this one before using brute force. The below uses a sliding window approach.
*/

var lengthOfLongestSubstring = function(s) {
  // Hash map to relate current string character to index
  var map = {};
  // result variable
  var result = 0;
  // "Slow" pointer
  var i = 0;
  // Loop through string with "fast" pointer
  for (j = 0; j < s.length; j++) {
    // if we reach a character already stored in the hashmap...
    if (map[s[j]]) {
      // set slow pointer equal to the max value between itself and the *next index over* from the previous occurrence of that character
      // further note on this line: this takes care of duplicates by disregarding them in the case the i variable has already moved beyond them.
      i = Math.max(map[s[j]], i)
    }
    // Update the result if the new window is larger than the last
    result = Math.max(result, j - i + 1);
    // set map value equal to next index over from current index.
    // further note on this line: this aids in the calculation in line 20 -- i will then "skip over" the earlier repeated character.
    map[s[j]] = j + 1;
  }
  // return result
  return result;
};