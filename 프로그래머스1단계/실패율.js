function solution(N, stages) {
  var answer = [];
  let fail = [];
  let list = [];
  for (let i = 1; i <= N; i++) {
    fail.push(stages.filter((e) => i === e).length);
    list.push(stages.filter((e) => i <= e).length);
  }
  for (let i = 0; i < N; i++) {
    answer.push({ idx: i + 1, ratio: fail[i] / list[i] });
  }
  answer.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else if (a.ratio < b.ratio) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  console.log(answer);
  return answer.map((e) => e.idx);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

// 내가원한걸좀더 간결하게 해주네
// function solution(N, stages) {
//   let result = [];
//   for (let i = 1; i <= N; i++) {
//     let reach = stages.filter((x) => x >= i).length;
//     let curr = stages.filter((x) => x === i).length;
//     result.push([i, curr / reach]);
//   }
//   result.sort((a, b) => b[1] - a[1]);
//   return result.map((x) => x[0]);
// }
