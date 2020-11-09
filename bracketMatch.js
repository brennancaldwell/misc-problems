/*
Pramp: Bracket Match

A string of brackets is considered correctly matched if every opening
bracket in the string can be paired up with a later closing bracket, and
vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “(
(” aren’t. For instance, “((” could become correctly matched by adding
two closing brackets at the end, so you’d return 2.


Given a string that consists of brackets, write a function bracketMatch
that takes a bracket string as an input and returns the minimum number of
brackets you’d need to add to the input in order to make it correctly
matched.

Explain the correctness of your code, and analyze its time and space
complexities.
*/

function bracketMatch(text) {
  let earlyEnd = 0, open = 0, close = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      open++;
    } else if (text[i] === ')') {
      close++;
    }

    if (open < close) {
      earlyEnd++;
    }
  }

  if (open >= close && earlyEnd > 0) {
    return earlyEnd += 2 * (open - close) + 1;
  } else {
    return Math.abs(open - close);
  }
}