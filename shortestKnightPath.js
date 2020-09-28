/*
Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

The knight is not allowed to move off the board. The board is 8x8.

For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

I particularly like this approach because it makes use of 1) Set and 2) Queue. This approach will ensure that the first answer will be the shortest (rather than the recursive approach, which will follow, say, all of the -2 -1 paths first. )
*/

let knight = (start, finish) => {
  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, 1], [2, -1]];
  let queue = [['_abcdefgh'.indexOf(start[0]), parseInt(start[1]), 0]];
  const finish = [['_abcdefgh'.indexOf(finish[0]), parseInt(finish[1])]];
  const paths = new Set();
  while (queue.length) {
    let pos = queue.shift();
    if (pos[0] === finish[0] && pos[1] === finish[1]) { return pos[2]; }
    const next = moves
      .map(move => [pos[0] + move[0], pos[1] + move[1], pos[2] + 1])
      .filter(el => el.every(x => x > 0 && x < 9))
      .filter(el => !paths.has(`${el[0]}${el[1]}`));
    if (next.length) {
      next.forEach(coord => paths.add(`${coord[0]}${coord[1]}`));
      queue.push(...next);
    }
  }
}