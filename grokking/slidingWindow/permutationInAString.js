/*
Grokking: Problem Challenge 1 : https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
Permutation in a String (hard)

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.
*/

const find_permutation = function(str, pattern) {
  let strTrack = {}, start = 0, pattTrack = {}, match = false;

  for (let x = 0; x < pattern.length; x++) {
    pattTrack[pattern[x]] === undefined
    ? pattTrack[pattern[x]] = 1
    : pattTrack[pattern[x]]++;
  }

  for (let end = 0; end < str.length; end++) {
    strTrack[str[end]] === undefined
    ? strTrack[str[end]] = 1
    : strTrack[str[end]]++;

    if (end - start + 1 === pattern.length) {
      if (Object.keys(strTrack).length === Object.keys(pattTrack).length) {
        match = true;
        for (let key in strTrack) {
          if (!(key in pattTrack) || strTrack[key] !== pattTrack[key]) {
            match = false;
          }
        }
      }
      strTrack[str[start]]--;
      if (strTrack[str[start]] === 0) {
        delete strTrack[str[start]];
      }
      start++;
    }

    if (match) break;
  }

  return match;
};

/*
Working solution above. Let's see how the solution code improves on this..

Ah, cool, so the optimization on the above is cosmetic but meaningful: rather than having a
separate object to match, we can decrement values each time we see them, adding to a "matched"
variable. If at any point the total number of matched letters is the same as the number of keys
in the pattern tracker, we can return true.

As above, if the window is larger than the actual pattern length, we can move the start var,
then ADD BACK the letter into the pattern tracker. See below:

const findPermutation = (str, pattern) => {
  let start = 0, matched = 0, charMap = {};

  for (let i = 0; i < pattern.length; i++) {
    charMap[pattern[i]] === undefined
    ? charMap[pattern[i]] = 1
    : charMap[pattern[i]]++;
  }

  for (let end = 0; end < str.length; end++) {
    if (charMap[str[end]] !== undefined) {
      charMap[str[end]]--;
      if (charMap[str[end]] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(charMap).length) {
      return true;
    }

    if (end >= pattern.length - 1) {
      if (charMap[str[start]] !== undefined) {
        if (charMap[str[start]] === 0) {
          matched--;
        }
         charMap[str[start]]++
      }
      start++;
    }
  }

  return false;
}
*/