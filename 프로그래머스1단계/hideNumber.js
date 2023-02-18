function solution(my_string) {
  let answer = 0;
  let myArray = [...my_string];
  let hideNumber = [];
  for (let i = 0; i < myArray.length; i++) {
    if (!isNaN(myArray[i])) {
      if (!isNaN(myArray[i - 1])) {
        hideNumber[hideNumber.length - 1] =
          hideNumber[hideNumber.length - 1] * 10 + Number(myArray[i]);
      } else {
        hideNumber.push(Number(myArray[i]));
      }
    }
  }
  console.log(hideNumber);
  answer = hideNumber.reduce((a, b) => a + b);
  return answer;
}

console.log(solution('aAb1B2cC34oOp'));
