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

//자릿수 합
function solution(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}

// 가장큰수 찾기
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

//문자열 뒤집기
function solution(my_string) {
  let a = my_string.split('');
  let b = [];
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  return b.join('');
}
// 배열뒤집기
function solution(num_list) {
  return num_list.reverse();
}

// 짝수 홀수 갯수
function solution(num_list) {
  let a = 0;
  let b = 0;
  num_list.map((item) => {
    item % 2 === 0 ? a++ : b++;
  });
  return [a, b];
}

function solution(my_string, letter) {
  return my_string
    .split('')
    .filter((e) => e != letter)
    .join('');
}

//피ㅏ자 나눠먹기3
function solution(slice, n) {
  return Math.ceil(n / slice);
}

//배열 원소의 길이
function solution(strlist) {
  var answer = [];
  strlist.map((item) => {
    answer.push(item.split('').length);
  });
  return answer;
}

// 배열 두배만들기
function solution(numbers) {
  let answer = numbers.map((e) => {
    return e * 2;
  });
  return answer;
}

//아이스 아메리카노
function solution(money) {
  return [parseInt(money / 5500), money - 5500 * parseInt(money / 5500)];
}

//제곱근판별
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

//세균 증식
function solution(n, t) {
  return n * Math.pow(2, t);
}

//문자열 안에 문자열
function solution(str1, str2) {
  return str1.includes(str2) > 0 ? 1 : 2;
}

//최댓값만들기 1
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

// 삼각형의 완성조건 (1)
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

// 피자 나눠 먹기 (1)
function solution(n) {
  return Math.ceil(n / 7);
}

// 점의 위치 구하기
function solution(dot) {
  if (dot[0] < 0) {
    return dot[1] < 0 ? 3 : 2;
  }
  if (dot[0] > 0) {
    return dot[1] < 0 ? 4 : 1;
  }
}

// n의 배수 고르기
function solution(n, numlist) {
  return numlist.filter((e) => e % n === 0);
}

// 중앙값 구하기
function solution(array) {
  array.sort((a, b) => a - b);
  return array[(array.length - 1) / 2];
}

// 옷가게 할인 받기
function solution(price) {
  if (price >= 500000) return Math.floor(price * 0.8);
  if (price >= 300000) return Math.floor(price * 0.9);
  if (price >= 100000) return Math.floor(price * 0.95);
  return price;
}
