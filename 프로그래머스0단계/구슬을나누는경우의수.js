function solution(balls, share) {
  var answer = 0;
  answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return Math.round(answer);
}

function factorial(n) {
  let result = 1;
  if (n === 1) return 1;
  else {
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(solution(5, 4));
// https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
// 왜 Math.round를 써야하는가
