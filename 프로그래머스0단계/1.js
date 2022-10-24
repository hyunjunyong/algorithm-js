// 두수의 차
function solution(num1, num2) {
  return num1 - num2;
}
// 몫 구하기
function solution(num1, num2) {
  return parseInt(num1 / num2);
}

// 곱하기
function solution(num1, num2) {
  return num1 * num2;
}

//나누기
function solution(num1, num2) {
  return num1 % num2;
}

//더하기
function solution(num1, num2) {
  return num1 + num2;
}

//나이구하기
function solution(age) {
  return 2022 - age + 1;
}

//두수 비교하기
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

//각도 계산
function solution(angle) {
  if (angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  else if (angle === 180) return 4;
}

// 두수의 나눗셈
function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

//배열의 평균
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

//중복된 숫자 구하기
function solution(array, n) {
  var answer = 0;
  array.map((item) => {
    if (item === n) answer++;
  });
  return answer;
}

//짝수합
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

//양꼬치
function solution(n, k) {
  return 12000 * n + 2000 * (k - parseInt(n / 10));
}

//더키큰사람
function solution(array, height) {
  let i = 0;
  array.map((item) => {
    if (item > height) i++;
  });
  return i;
}

//편지
function solution(message) {
  return message.split('').length * 2;
}
