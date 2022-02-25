function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

// 다른사람들 풀이
// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }

// function solution(a, b) {
//     var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
//     return answer;
// }
