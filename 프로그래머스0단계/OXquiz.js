function solution(quiz) {
  var answer = [];
  let b = [];
  for (let i = 0; i < quiz.length; i++) {
    let solve = quiz[i].split(' ');
    for (let j = 0; j < solve.length; j++) {
      if (solve[j] === '-') solve[j + 1] *= -1;
      if (!isNaN(solve[j])) {
        b.push(solve[j]);
      }
    }
    b.reduce((acc, cur) => Number(acc) + Number(cur)) ===
    Number(b[b.length - 1]) * 2
      ? answer.push('O')
      : answer.push('X');
    b = [];
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
