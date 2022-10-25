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

// 배열 자르기
function solution(numbers, num1, num2) {
  return numbers.filter((e, i) => i >= num1 && i <= num2);
}

// 모음 제거
function solution(my_string) {
  let a = my_string.split('');
  a = a.filter((e) => {
    return e !== 'a' && e !== 'e' && e !== 'i' && e !== 'o' && e !== 'u';
  });
  return a.join('');
}

//문자 반복 출력하기
function solution(my_string, n) {
  return my_string
    .split('')
    .map((e) => e.repeat(n))
    .join('');
}

// 대문자와 소문자
function solution(my_string) {
  return Array.from(my_string)
    .map((e) => (e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()))
    .join('');
}

//문자열 정렬하기 (2)
function solution(my_string) {
  return my_string
    .split('')
    .map((e) => e.toLowerCase())
    .sort()
    .join('');
}

//짝수는 싫어요
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }
  return answer;
}

// 순서쌍의 개수
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer++;
  }
  return answer;
}

// 문자열 정렬하기 (1)
function solution(my_string) {
  return Array.from(my_string.replace(/[^0-9]/g, ''))
    .sort((a, b) => a - b)
    .map((e) => (e = Number(e)));
}

// 배열의 유사도
function solution(s1, s2) {
  return s1.filter((e) => s2.indexOf(e) !== -1).length;
}

// 개미 군단
function solution(hp) {
  let sum = 0;
  for (let i = 5; i >= 1; i--) {
    sum += parseInt(hp / i);
    hp = hp % i;
    i--;
  }
  return sum;
}

// 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
  return Array.from(my_string.replace(/[^0-9]/g, '')).reduce(
    (acc, cur) => parseInt(acc) + parseInt(cur)
  );
}

// 숫자찾기
function solution(num, k) {
  for (let i = 0; i < [...String(num)].length; i++) {
    if (parseInt([...String(num)][i]) === k) {
      answer = i + 1;
      break;
    } else answer = -1;
  }
  return answer;
}

//직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log('*'.repeat(i));
  }
});

// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  var answer = [...my_string];
  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
  return answer.join('');
}

// 가위 바위 보
function solution(rsp) {
  let answer = [];
  answer = [...rsp];
  let answer1 = [];
  answer.map((e) => {
    if (e === '2') answer1.push('0');
    if (e === '5') answer1.push('2');
    if (e === '0') answer1.push('5');
  });
  return answer1.join('');
}

// 369게임
function solution(order) {
  let sum = 0;
  [...String(order)].map((e) => {
    if (e === '3' || e === '6' || e === '9') sum++;
  });
  return sum;
}

// 외계행성의 나이
function solution(age) {
  let a = [...String(age)];
  let b = [];
  a.map((e) => {
    b.push(String.fromCharCode(Number('a'.charCodeAt(0)) + +e));
  });
  return b.join('');
}

// 배열 회전시키기
function solution(numbers, direction) {
  direction === 'right'
    ? (numbers.unshift(numbers[numbers.length - 1]), numbers.pop())
    : (numbers.push(numbers[0]), numbers.shift());
  return numbers;
}

//약수 구하기
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}

// 7의 개수
function solution(array) {
  let answer = 0;
  [...array.join('')].map((e) => {
    if (e === '7') answer++;
  });
  return answer;
}

// 주사위의 개수
function solution(box, n) {
  var answer = 1;
  for (let i = 0; i < box.length; i++) {
    answer *= parseInt(box[i] / n);
  }
  return answer;
}

// 최댓값 만들기 (2)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1] >
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? numbers[0] * numbers[1]
    : numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

// 피자 나눠 먹기 (2) 최소공배수
function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && 6 % i === 0) {
      answer = i;
    }
  }
  return n / answer;
}

// 암호 해독
function solution(cipher, code) {
  answer = [];
  answer = [...cipher].filter((e, index) => {
    return (index + 1) % code === 0;
  });
  return answer.join('');
}

// 중복된 문자 제거
function solution(my_string) {
  return [...new Set([...my_string])].join('');
}
