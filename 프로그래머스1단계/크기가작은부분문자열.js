function solution(t, p) {
  var answer = [];
  tArray = t.split('');

  for (let i = 0; i < tArray.length - p.length + 1; i++) {
    answer.push(tArray.slice(i, i + p.length));
  }
  let result = 0;
  answer.map((item) => {
    if (Number(item.join('')) <= Number(p)) result++;
  });

  return result;
}

// console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
