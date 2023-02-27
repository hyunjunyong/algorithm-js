function solution(chicken) {
  var answer = 0;
  while (chicken > 1) {
    answer += chicken / 10;
    chicken /= 10;
    console.log(answer, chicken);
  }
  return Math.floor(answer);
}

console.log(solution(100));
