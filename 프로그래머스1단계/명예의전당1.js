function solution(k, score) {
  var answer = [];
  let list = [];
  for (let i = 0; i < score.length; i++) {
    if (list.length < k) {
      list.push(score[i]);
      answer.push(Math.min(...list));
    } else {
      if (Math.min(...list) < score[i]) {
        list.splice(list.indexOf(Math.min(...list)), 1, score[i]);
      }
      answer.push(Math.min(...list));
    }
    // console.log(list);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
