/*
Leetcode: 279. Perfect Squares

Given a positive integer n, find the least number of perfect square numbers
(for example, 1, 4, 9, 16, ...) which sum to n.
*/

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