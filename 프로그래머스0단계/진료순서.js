function solution(emergency) {
  let answer = [];
  let cp = emergency.slice().sort((a, b) => b - a);

  answer = emergency.map((value) => cp.indexOf(value) + 1);
  return answer;
}

let emergency = [3, 78, 56];
console.log(solution(emergency));
