function solution(sides) {
  sides.sort((a, b) => a - b);
  var answer = 0;
  let start = 1;
  while (sides[0] + sides[1] >= start) {
    if (sides[1] > start) {
      if (sides[0] + start > sides[1]) answer++;
      start++;
    } else if (start >= sides[1]) {
      if (sides[0] + sides[1] > start) answer++;
      start++;
    }
  }
  return answer;
}

console.log(solution([3, 6]));
