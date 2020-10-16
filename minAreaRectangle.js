/*
Leetcode: 939. Minimum Area Rectangle: https://leetcode.com/problems/minimum-area-rectangle/

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.



Example 1:

Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:

Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2


Note:

1 <= points.length <= 500
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.

*/

const minAreaRectangle = (points) => {
  let coordMap = {}, tracker = {}, result = Infinity;

  for (let i = 0; i < points.length; i++) {
    coordMap[points[i][0]] === undefined
    ? coordMap[points[i][0]] = [points[i][1]];
    : coordMap[points[i][0]].push(points[i][1]);
  }

  for (let x in coordMap) {
    coordMap[x].sort((a, b) => a-b);
    for (let y = 0; y < coordMap[x].length; y++) {
      for (let z = 0; z < coordMap[x].length; z++) {
        let y1 = coordMap[x][y];
        let y2 = coordMap[x][z];
        let pair = `${y1}${y2}`;
        x = Number(x);

        if (tracker[pair]) {
          result = Math.min(result, (x - tracker[pair]) * (y2 - y1));
        }

        tracker[pair] = x;
      }
    }
  }

  return result === Infinity ? 0 : result;
}

/*
Time: O(n^2)
Space: O(n)
*/