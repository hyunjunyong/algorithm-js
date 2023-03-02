function solution(k, m, score) {
  score = score.sort((a, b) => b - a);
  var answer = 0;
  let box = [];
  for (let i = 0; i < score.length; i++) {
    box.push(score[i]);
    if (i % m === m - 1) {
      box.sort((a, b) => a - b);
      answer += box[0] * m;
      box = [];
    }
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
