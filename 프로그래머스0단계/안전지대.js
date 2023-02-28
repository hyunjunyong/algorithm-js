function solution(board) {
  var answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }

  board.forEach((a) => a.forEach((b) => (b === 0 ? answer++ : null)));
  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);

// function solution(board) {
//   let outside = [
//     [-1, 0],
//     [-1, -1],
//     [-1, 1],
//     [0, -1],
//     [0, 1],
//     [1, 0],
//     [1, -1],
//     [1, 1],
//   ];
//   let safezone = 0;

//   board.forEach((row, y, self) =>
//     row.forEach((it, x) => {
//       if (it === 1) return false;
//       return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
//         ? false
//         : safezone++;
//     })
//   );

//   return safezone;
// }
