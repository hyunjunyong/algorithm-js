function solution(X, Y) {
  const commons = [];
  const obj = {};

  for (const el of X) {
    obj[el] = (obj[el] || 0) + 1;
    console.log(obj);
  }

  for (const el of Y) {
    if (obj[el]) {
      commons.push(el);
      obj[el]--;
      console.log(obj);
    }
  }
  console.log(commons);
  commons.sort((a, b) => b - a);

  if (!commons.length) return '-1';
  else if (commons[0] === '0') return '0';
  return commons.join('');
}

console.log(solution('12321', '42531'));
// console.log(solution('5525', '1255'));
// test case 11-15 fail
// function solution(X, Y) {
//   var answer = '';
//   let xArr = X.split('');
//   let yArr = Y.split('');
//   let common = [];

//   for (let i = 0; i < xArr.length; i++) {
//     if (yArr.includes(xArr[i])) {
//       common.push(xArr[i]);
//       yArr.splice(yArr.indexOf(xArr[i]), 1);
//     }
//   }

//   answer = common.length ? common.sort((a, b) => b - a).join('') : '-1';
//   if (Number(answer) === 0) answer = '0';
//   return answer;
// }
