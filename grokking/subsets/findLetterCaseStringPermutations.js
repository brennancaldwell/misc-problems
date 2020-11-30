/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P

Given a string, find all of its permutations preserving the character
sequence but changing case.
*/

const findLetterCaseStringPermutation(str) {
  const permutations = [];
  permutations.push(str);
  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) {
      const n = permutations.length;
      for (let j = 0; j < n; j++) {
        let current = permutations[j].split('');
        if (current[i] === current[i].toLowerCase()) {
          current[i] = current[i].toUpperCase();
        } else {
          current[i] = current[i].toLowerCase();
        }
        permutations.push(current.join(''));
      }
    }
  }
  return permutations;
}