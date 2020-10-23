/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl

Comparing Strings Containing Backspaces
Given two strings containing backspaces (identified by the character ‘#’),
check if the two strings are equal.

*/

const backspaceCompare = (str1, str2) => {
  let indexOne = str1.length - 1, indexTwo = str2.length - 1;

  while (indexOne >= 0 || indexTwo >= 0) {
    let iOne = nextChar(str1, indexOne);
    let iTwo = nextChar(str2, indexTwo);

    if (iOne < 0 && iTwo < 0) {
      return true;
    }

    if (iOne < 0 || iTwo < 0) {
      return false;
    }

    if (str1[iOne] !== str2[iTwo]) {
      return false;
    }

    indexOne = iOne--;
    indexTwo = iTwo--;
  }

  return true;
}

const nextChar = (str, index) => {
  let backspace = 0;
  while (index >= 0) {
    if (str[index] === '#') {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }
    index--;
  }
  return index;
}

/*
The above uses O(M+N) Time, O(1) space. Similar to what I implemented
below, except the helper function determines the next valid character
rather than converting the string.

Below was my own solution, which uses O(N) space.
Time O(M + N)
Space O(N);

const backspace_compare = function(str1, str2) {
  // TODO: Write your code here
  return stringConverter(str1) === stringConverter(str2);
};

const stringConverter = (str) => {
  let result = '';
  for (let i = str.length; i >= 0; i--) {
    let backspace = 0;
    while (str[i] === '#') {
      backspace++;
      i--;
    }
    i -= backspace;
    result = result + str[i];
  }
  return result;
}

*/