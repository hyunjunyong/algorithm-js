function solution(numbers) {
  let splitNumber = [
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

  for (let i = 0; i < splitNumber.length; i++) {
    numbers = numbers.split(splitNumber[i]).join(i);
  }
  return Number(numbers);
}

console.log(solution('onefourzerosixseven'));
