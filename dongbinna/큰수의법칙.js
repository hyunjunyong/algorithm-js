//  배열의 크기 N , 숫자가 더해지는 횟수 M, 연속해서 더하는 수 K
// 5 8 3
// 2 4 5 4 6
// output 46
function resolve(n, m, k, array) {
  let sortArray = array.slice().sort((a, b) => a - b);
  let answer = 0;
  while (m > 0) {
    let i = n - 1;
    if (i === n - 1) {
      answer += sortArray[i] * k;
      i = n - 2;
      m -= k;
    } else if (i === n - 2) {
      answer += sortArray[i];
      i = n - 1;
      m -= 1;
    }
  }
  return answer;
}
console.log(resolve(5, 8, 3, [2, 4, 5, 4, 6]));
