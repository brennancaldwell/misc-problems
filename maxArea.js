/*
Container With Most Water

Leetcode: https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each
represents a point at coordinate (i, ai). n vertical lines are
drawn such that the two endpoints of the line i is at (i, ai)
and (i, 0). Find two lines, which, together with the x-axis
forms a container, such that the container contains the most
water.

Notice that you may not slant the container.
*/


const maxArea = (heights) => {
  let largest = 0, left = 0, right = heights.length - 1;

  while (left < right) {
    largest = Math.max(largest, Math.min(heights[left], heights[right]) * (right - left));

    heights[left] < heights[right]
    ? left++
    : right--;
  }

  return largest;
};

/*
Above solution -->
O(n) time
O(1) space

Area is constrained by the smaller of the two sides. Therefore,
after calculating area, we want to move the smaller side to the
next index,

A brute force solution (O(n^2) time, O(1) space)

const maxArea = (height) => {
  let largest = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if ((height[i] * (j - 1)) < largest) { continue; }
      largest = Math.max(largest, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return largest;
}

Nested loop incredibly expensive.
*/