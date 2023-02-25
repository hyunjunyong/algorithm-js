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
