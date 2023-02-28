// function solution(lines) {
//   var answer = [];
//   function line(a, b) {
//     for (let i = b; i < a; i++) {
//       answer.push(i);
//     }
//   }
//   if (lines[2][0] < lines[1][1]) {
//     answer.push(line(lines[1][1], lines[2][0]));
//   }
//   if (lines[2][0] < lines[0][1]) {
//     answer.push(line(lines[0][1], lines[2][0]));
//   }
//   if (lines[1][0] < lines[0][1]) {
//     answer.push(line(lines[0][1], lines[1][0]));
//   }
//   answer = [...new Set(answer)];

//   return answer.length === 0 ? 0 : answer.length - 1;
// }
function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200); // 선분들이 놓일 공간
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }
  return answer;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// );
