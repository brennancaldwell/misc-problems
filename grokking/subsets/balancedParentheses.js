/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2

For a given number ‘N’, write a function to generate all combination of ‘N’
pairs of balanced parentheses.
*/

function generateValidParentheses(num) {
  const result = [];

  (function parens(open, close, current) {
    if (current.length === num * 2) {
      result.push(current);
      return;
    }

    if (open < close) parens(open + 1, close, current + '(');

    if (close < open) parens(open, close + 1, current + ')');
  })(0, 0, '');

  return result;
};