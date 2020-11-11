/*
Leetcode: 139. Word Break
https://leetcode.com/problems/word-break/

Given a non-empty string s and a dictionary wordDict containing a list of
non-empty words, determine if s can be segmented into a space-separated
sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the
segmentation.
You may assume the dictionary does not contain duplicate words.
*/

function wordBreak(s, wordDict) {
  const dict = new Set(wordDict),
        dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let wordEnd = 1; wordEnd < dp.length; wordEnd++) {
    for (let wordStart = 0; wordStart < wordEnd; wordStart++) {
      if (dp[wordStart] && dict.has(s.slice(wordStart, wordEnd))) {
        dp[wordEnd] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

