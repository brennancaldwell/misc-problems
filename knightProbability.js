/*
Leetcode: 688. Knight Probability in Chessboard.

On an NxN chessboard, a knight starts at the r-th row and c-th column and
attempts to make exactly K moves. The rows and columns are 0 indexed, so
the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each
move is two squares in a cardinal direction, then one square in an
orthogonal direction.

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.



Example:

Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the
knight on the board.
From each of those positions, there are also two moves that will keep the
knight on the board.
The total probability the knight stays on the board is 0.0625.


Note:

N will be between 1 and 25.
K will be between 0 and 100.
The knight always initially starts on the board.
*/

const Matrix = (N) => {
  const matrix = new Array(N);

  for (let i = 0; i < N; i++) {
    matrix[i] = new Array(N).fill(0);
  }

  return matrix;
};

const knightProbability = (N, K, r, c) => {
  let currentMatrix = Matrix(N);
  const dr = [1, 1, 2, 2, -1, -1, -2, -2];
  const dc = [2, -2, 1, -1, 2, -2, 1, -1];

  currentMatrix[r][c] = 1;

  while (K > 0) {
    let newMatrix = Matrix(N);

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        for (let k = 0; k < 8; k++) {
          let newRow = r + dr[k];
          let newColumn = c + dc[k];

          if (0 <= newRow && newRow < N && 0 <= newColumn && newColumn < N) {
            newMatrix[newRow][newColumn] = currentMatrix[r][c] / 8;
          }
        }
      }
    }

    currentMatrix = newMatrix;
    K--;
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    for let (j = 0; j < N; j++) {
      result += currentMatrix[i][j];
    }
  }

  return result;
}