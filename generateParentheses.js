/*
Generate Parentheses

Leetcode: https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/


const generateParentheses = (n) => {
  let result = [];

  const parens = (current, open, close, max) => {
    if (current.length === max * 2) {
      result.push(current);
      return;
    }

    if (open < max) {
      parens(current+'(', open + 1, close, max);
    }

    if (close < open) {
      parens(current+')', open, close + 1, max);
    }
  };

  parens('', 0, 0, n);

  return result;
}






/*
Brute force solution: O(2^n)

const generateParentheses = (n) => {
  const result = [];

  const generateAll = (current, n) => {
    if (current.length == ((n * 2) - 1)) {
      if (valid(current)) {
        result.push(current);
      }
    } else {
      generateAll(current+'(', n);
      generateAll(current+')', n);
    }
  }

  const valid = (current) => {
    let balance = 0;
    for (let i = 0; i < current.length; i++) {
      if (c === '(') {
        balance++;
      } else {
        balance--;
      }
      if (balance < 0) { return false; }
    }
    return balance === 0;
  }
}; */
