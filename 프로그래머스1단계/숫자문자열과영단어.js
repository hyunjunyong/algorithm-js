function solution(s) {
  var answer = s;
  let stringNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < stringNumber.length; i++) {
    let arr = answer.split(stringNumber[i]);

    answer = arr.join(i);
  }
  return Number(answer);
}

console.log(solution('one4seveneight'));
// console.log(solution('23four5six7'));
// console.log(solution('2three45sixseven'));
// console.log(solution('123'));
