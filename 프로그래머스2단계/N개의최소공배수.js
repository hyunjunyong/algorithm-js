function solution(arr) {
  var answer = [];
  function gcd(a, b) {
    for (let i = Math.min(a, b); i > 0; i--) {
      if ((a % i === 0) & (b % i === 0)) {
        return i;
      }
    }
    return 1;
  }
  function lcd(a, b) {
    console.log((a * b) / gcd(a, b), gcd(a, b));
    return (a * b) / gcd(a, b);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) answer.push(arr[i]);
    else {
      answer.push(lcd(answer.pop(), arr[i]));
    }
    console.log(answer);
  }
  return answer[0];
}

console.log(solution([12, 32, 45, 67, 72]));
// 96480 , 26
