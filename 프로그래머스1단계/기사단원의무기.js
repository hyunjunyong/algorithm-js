function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    if (division(i) > limit) answer += power;
    else answer += division(i);
  }

  return answer;
}

function division(num) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum++;
      if (num / i != i) sum++;
    }
  }
  return sum;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
