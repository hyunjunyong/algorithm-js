function solution(a, b, c) {
  let answer = 0;
  if (a === b && a === c) {
    answer =
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (a + b + c);
  } else if (a === b || a === c || b === c) {
    answer = (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (a + b + c);
  } else {
    answer = a + b + c;
  }

  return answer;
}
