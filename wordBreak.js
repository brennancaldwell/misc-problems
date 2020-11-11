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

/*
Want to take a second to pause over this. Similar, I believe, to the DP
approach to minimum letter changes to convert one word to another. We
populate an array with "false" (representing the length of the string plus
one), then convert the first array item to "true". We then use two nested
loops: one which tracks the "word end" letter and another which tracks the
word start whenever we reach the point at which 1) a completed word comes
immediately before our current word (dp[wordStart] = true) and our current
word also appears in the dictionary, we set dp[wordEnd] to true. By using
this approach, we avoid issues that come up when we have strings like "b"
and "bb" -- both values in the dp array would contain true values.
*/