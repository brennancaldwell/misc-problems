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

/*
Time: O(N * 2^N)
Space: O(2^N)

Non-recursive solution:

class ParensString {
  constructor(str, open, close) {
    this.str = str;
    this.open = open;
    this.close = close;
  }
}

function generateValidParentheses(num) {
  const result = [], queue = [];
  queue.push(new ParensString('', 0, 0));

  while (queue.length) {
    const parens = queue.shift();

    if (parens.open === num && parens.close === num) {
      result.push(parens.str);
    } else {
      if (parens.open < num) {
        queue.push(new ParensString(`${parens.string}(`, parens.open + 1, parens.close));
      }
      if (parens.close < parens.open) {
        queue.push(new ParensString(`${parens.string})`, parens.open, parens.close + 1));
      }
    }
  }

  return result;
}
*/