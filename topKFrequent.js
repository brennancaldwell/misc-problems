/*
Leetcode: 347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/

Given an non-empty array of integers, return the k most frequent elements.
*/

function topKFrequent(nums, k) => {
  const trackHash = {};

  nums.forEach(num => {
    trackHash[num] === undefined
    ? trackHash[num] = 1
    : trackHash[num]++;
  })

  return [... new Set(nums)]
          .sort((a, b) => trackHash[b] - trackHash[a])
          .slice(0, k);
};

/*
Time Complexity: O(n log n) -- sort
Space: O(n)
Runtime 80ms (faster than 97.92%)
Memory 40.8, less than 8.56%
*/