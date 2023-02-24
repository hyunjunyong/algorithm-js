function solution(num) {
  let start = num.split('');
  start[0] = num.charCodeAt(0) - 96;
  let options = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];
  let sum = 0;
  start[1] = Number(start[1]);
  for (let i = 0; i < 8; i++) {
    if (
      start[0] + options[i][0] > 0 &&
      start[0] + options[i][0] < 9 &&
      start[1] + options[i][1] > 0 &&
      start[1] + options[i][1] < 9
    ) {
      sum++;
    }
  }
  return sum;
}

console.log(solution('a2'));
console.log(solution('a1'));
