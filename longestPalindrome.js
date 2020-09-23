/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
*/

var longestPalindrome = function(s) {
  if (s === '') { return '';}
  var longest = s[0];
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      var subStr = s.substr(i, j - i + 2);
      if (isPalindrome(subStr) && subStr.length > longest.length) {
        longest = subStr;
      }
    }
  }
  return longest;
};

var isPalindrome = function(s) {
  return s === s.split('').reverse().join('');
};


/*
Though this naive solution worked for several cases (after some debugging), it was timing out with longer strings, which makes sense: time complexity is O(n^3).

A proposed solution on LeetCode uses the idea that we can expand around the center of each proposed palindrome rather than checking each substring for palindromicity.

var longestPalindrome = function(s) {
  if (s === null || s.length < 1) { return ''; }
  var start = 0, end = 0;
  for (var i = 0; i < s.length; i++) {
    var len1 = expandAroundCenter(s, i, i);
    var len2 = expandAroundCenter(s, i, i + 1); // palindromes can either reflect on a letter or between letters!
    var len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.substr(start, end + 1);
}

var expandAroundCenter = function(s, left, right) {
  var L = left, R = right;
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
}
*/
