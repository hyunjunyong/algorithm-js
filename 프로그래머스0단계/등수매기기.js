function solution(score) {
  let average = [];
  var answer = [];
  for (let i = 0; i < score.length; i++) {
    average.push((score[i][0] + score[i][1]) / 2);
  }
  let sortAverage = [...average];
  sortAverage.sort((a, b) => b - a);

  average.map((item) => {
    answer.push(sortAverage.indexOf(item) + 1);
  });
  return answer;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
