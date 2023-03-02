function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));

// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
// 다른풀이인데 이해안감
