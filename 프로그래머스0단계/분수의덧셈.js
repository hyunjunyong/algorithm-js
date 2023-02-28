function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  answer.push(denom1 * numer2 + numer1 * denom2);
  answer.push(denom1 * denom2);
  let gcdAnswer = gcd(answer[0], answer[1]);
  answer[0] /= gcdAnswer;
  answer[1] /= gcdAnswer;
  return answer;
}
function gcd(a, b) {
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
}
console.log(solution(9, 2, 1, 3));
