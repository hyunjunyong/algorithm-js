function solution(keyinput, board) {
  // let move = [[0,1],[0,-1],[-1,0],[1,0]] // up down left right
  var answer = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case 'up':
        answer[1] = Number(answer[1]) + 1;
        break;
      case 'down':
        answer[1] = Number(answer[1]) - 1;
        break;
      case 'left':
        answer[0] = Number(answer[0]) - 1;
        break;
      case 'right':
        answer[0] = Number(answer[0]) + 1;
        break;
    }
  }
  if ((Number(board[0]) - 1) / 2 < Math.abs(answer[0]))
    answer[0] > 0
      ? (answer[0] = (Number(board[0]) - 1) / 2)
      : (answer[0] = ((Number(board[0]) - 1) / 2) * -1);
  if (Number(board[1] - 1) / 2 < Math.abs(answer[1]))
    answer[1] > 0
      ? (answer[1] = (Number(board[1]) - 1) / 2)
      : (answer[1] = ((Number(board[1]) - 1) / 2) * -1);
  return answer;
}

console.log(
  solution(
    ['left', 'left', 'left', 'left', 'right', 'right', 'right', 'right'],
    [5, 5]
  )
);
// 기대값 = [2,0]
