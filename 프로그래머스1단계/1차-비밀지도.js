function solution(n, arr1, arr2) {
  var answer = [];

  const tmp1 = [];
  const tmp2 = [];

  for (let i = 0; i < arr1.length; i++) {
    tmp1.push(arr1[i].toString(2));
    while (tmp1[i].length !== n) {
      tmp1[i] = '0' + tmp1[i];
    }
  }
  console.log(tmp1);

  for (let i = 0; i < arr2.length; i++) {
    tmp2.push(arr2[i].toString(2));
    while (tmp2[i].length !== n) {
      tmp2[i] = '0' + tmp2[i];
    }
  }

  console.log(tmp2);
  for (let i = 0; i < n; i++) {
    let val = '';
    for (let j = 0; j < n; j++) {
      tmp1[i][j] == 0 && tmp2[i][j] == 0 ? (val += ' ') : (val += '#');
    }
    answer.push(val);
    val = '';
  }
  console.log(answer);

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//   return '0'.repeat(n - s.length) + s;
// }
