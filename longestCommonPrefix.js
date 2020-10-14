/*
14. Longest Common Prefix: https://leetcode.com/problems/
longest-common-prefix/

Write a function to find the longest common prefix string amongst an array
of strings.

If there is no common prefix, return an empty string "".
*/

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) { return; }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (strs[i][0] !== prefix[0]) {
        return '';
      }
      if (strs[i][j] !== prefix[j]) {
        prefix = prefix.slice(0, j)
      }
    }
  }
  return prefix;
}