function solution(my_string) {
  let a = my_string.split(' ');
  let b = [];
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === '-') {
      a[i + 1] = -a[i + 1];
    }
    if (!isNaN(a[i])) {
      b.push(a[i]);
    }
  }
  console.log(b);
  return b.reduce((acc, cur) => Number(acc) + Number(cur));
}

console.log(solution('3 + 4'));

// var solution = eval;
// 굉장히 위험한코드고 절대 쓰면안됨
