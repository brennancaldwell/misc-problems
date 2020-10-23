/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl

Search Quadruplets

Given an array of unsorted numbers and a target number, find all unique
quadruplets in it, whose sum is equal to the target number.
*/

const search_quadruplets = function(arr, target) {
  let quadruplets = [];
  arr.sort((a, b) => a - b);
  for (let first = 0; first < arr.length - 3; first++) {
    for (let second = first + 1; second < arr.length - 2; second++) {
      let third = second + 1;
      let fourth = arr.length - 1;
      while (third < fourth) {
        let sum = arr[first] + arr[second] + arr[third] + arr[fourth];
        if (sum === target) {
          quadruplets.push([arr[first], arr[second], arr[third], arr[fourth]]);
          third++;
          fourth--;
          while (third < fourth && arr[third] === arr[third - 1]) {
            third++;
          }
          while (third < fourth && arr[fourth] === arr[fourth - 1]) {
            fourth--;
          }
        } else if (sum < target) {
          third++;
        } else {
          fourth--;
        }
      }
    }
  }
  return quadruplets;
};

/*
Time O(n^3)
Space O(n)
*/