/*
Leetcode Medium:
There are n soldiers standing in a line. Each soldier is assigned a unique
rating value.

You have to form a team of 3 soldiers amongst them under the following
rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j],
 rating[k]).

A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] >
  rating[j] > rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can
  be part of multiple teams).

*/

var numTeams = function(rating) {
  if (rating.length < 4) { return 0; }
  let counter = 0;
  let relationship = '';
  for (let i = 0; i < rating.length; i++) {
      if (i === rating.length - 2) { break; }
      for (let s = i + 1; s < rating.length; s++) {
          if (rating[s] > rating[i]) {
              relationship = '+';
          }
          if (rating[s] < rating[i]) {
              relationship = '-';
          }
          for (let t = s + 1; t < rating.length; t++) {
              if (relationship === '+') {
                  if (rating[t] > rating[s]) {
                      counter++;
                  }
              }
              if (relationship === '-') {
                  if (rating[t] < rating[s]) {
                      counter++;
                  }
              }
          }
          relationship = '';
      }
  }
  return counter;
};