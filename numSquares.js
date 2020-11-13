/*
Leetcode: 279. Perfect Squares

Given a positive integer n, find the least number of perfect square numbers
(for example, 1, 4, 9, 16, ...) which sum to n.
*/

function numSquares(n) {
  // Initialize an array to track minimum number of squares added to reach
  // current index. Each *index* represents a number we hit on the way to
  // n, where as the array index item represents the minimum number of
  // squares it took us to get there.
  const dp = new Array(n + 1);
  dp[0] = 0;

  // Increment values up to n
  for (let num = 1; num <= n; num++) {
    dp[num] = Infinity;
    for (let sq = 1; sq * sq <= num; sq++) {
      // Array index value will be the minimum number of squares it has
      // taken us so far to reach our current num value. For instance,
      // when sq is 2 and num is 4, our minimum value will be
      // dp[4 - (2 * 2)] + 1 = dp[0] + 1 = 1
      dp[num] = Math.min(dp[num], dp[num - (sq * sq)] + 1);
    }
  }

  return dp[n];
}

/*
Naive solution timing out:
var numSquares = function(n) {
    const perfectSq = new Map();
    let squareTotal = Infinity;
    for (let i = 1; i * i <= n; i++) {
        perfectSq.set(i * i, true);
    }

    (function squareAdder(sum, total) {
        if (sum === n) {
            squareTotal = Math.min(squareTotal, total);
            return;
        }
        if (sum > n) {
            return;
        }
        perfectSq.forEach((v, k) => {
            squareAdder(sum + k, total + 1);
        })
    })(0, 0);

    return squareTotal === Infinity ? 0 : squareTotal;
};

Of course, I had the instinct to use DP but still do not have the intuition
to build it out. Figured this was going to be similar to the word break
problem, in which we track work breaks with an array filled with false
values. In the DP approach to this problem, we do something similar. Instead
of storing a boolean, however, we track the *minimum number of squares* it
takes to get to that particular number as we increment up to n.
*/