/* 42. Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water/

Helpful animation of this prompt: https://youtu.be/HmBbcDiJapY?t=51


Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap
after raining.


VIEW ELEVATION MAP ON LEETCODE



Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

const trap = (topo) => {
  const maxFromL = new Array(topo.length);
  const maxFromR = new Array(topo.length);

  let heightMax = 0;
  for (let l = 0; l < topo.length; l++) {
    heightMax = Math.max(heightMax, topo[l]);
    maxFromL[l] = heightMax;
  }

  heightMax = 0;
  for (let r = topo.length - 1; r >= 0; r++) {
    heightMax = Math.max(heightMax, topo[r]);
    maxFromR[r] = heightMax;
  }

  let water = 0;
  for (let i = 0; i < topo.length; i++) {
    water += (Math.min(maxFromL[i], maxFromR[i]) - topo[i]);
  }

  return water;
}

/*
Above, the dynamic programming solution. O(n) time and O(n) space.

A good pattern to pick up on: Any time you've got to precompute some value
that holds true throughout (i.e. highest peak to the right / sum of all
values to the right, etc.) think about creating separate arrays to store
information based on index (sum of all numbers to the right of i).

My first solution, brute force (O(n^2) time and O(1) space):

var trap = function(height) {
  let water = 0;

  for (let i = 1; i < height.length; i++) {
    let leftIndex = i, leftIndexSearch = i, rightIndex = i, rightIndexSearch = i;

    while (leftIndexSearch >= 0) {
      if (height[leftIndexSearch] > height[leftIndex]) {
        leftIndex = leftIndexSearch;
      }
      leftIndexSearch--;
    }

    while (rightIndexSearch < height.length) {
      if (height[rightIndexSearch] > height[rightIndex]) {
        rightIndex = rightIndexSearch;
      }
      rightIndexSearch++;
    }

    if (rightIndex === i || leftIndex === i) { continue; }

    const lowPeak = Math.min(height[leftIndex], height[rightIndex]);

    water += (lowPeak - height[i]);
  }

  return water;
};
*/