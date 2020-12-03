/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l

Given an expression containing digits and operations (+, -, *), find all
possible ways in which the expression can be evaluated by grouping the
numbers and operators using parentheses.

Example 1:

Input: "1+2*3"
Output: 7, 9
Explanation: 1+(2*3) => 7 and (1+2)*3 => 9
Example 2:

Input: "2*3-4-5"
Output: 8, -12, 7, -7, -3
Explanation: 2*(3-(4-5)) => 8, 2*(3-4-5) => -12, 2*3-(4-5) => 7, 2*(3-4)-5
=> -7, (2*3)-4-5 => -3
*/

function evaluateExpression(input, expressionMap = {}) {
  if (expressionMap[input]) return expressionMap[input];

  const result = [];

  if (!input.includes('-') && !input.includes('+') && !input.includes('/') && !input.includes('*')) {
    result.push(Number(input));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isNaN(Number(char))) {
        const left = evaluateExpression(input.slice(0, i));
        const right = evaluateExpression(input.slice(i + 1));
        for (let x = 0; x < left.length; x++) {
          for (let y = 0; y < right.length; y++) {
            const leftVal = left[x];
            const rightVal = right[y];

            if (char === '-') result.push(leftVal - rightVal);
            else if (char === '+') result.push(leftVal + rightVal);
            else if (char === '/') result.push(leftVal / rightVal);
            else if (char === '*') result.push(leftVal * rightVal);
          }
        }
      }
    }
  }

  expressionMap[input] = result;
  return result;
}

/*
Time O(N * 2^N)
Space O(2^N)
*/