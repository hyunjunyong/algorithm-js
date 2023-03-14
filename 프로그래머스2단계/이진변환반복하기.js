// 이진변환반복하기.js
function solution(s) {
  let length = 0;
  let sum = 0;
  let i = 0;
  while (s !== '1') {
    sum += s.length - s.split('0').join('').length;
    s = s.split('0').join('');
    length = s.length;
    s = length.toString(2);
    i++;
  }
  return [i, sum];
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
