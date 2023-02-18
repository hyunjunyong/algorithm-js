function solution(my_string) {
  let answer = 0;
  let myArray = [...my_string];
  let hideNumber = [];
  for (let i = 0; i < myArray.length; i++) {
    if (!isNaN(myArray[i])) {
      if (!isNaN(myArray[i + 1])) {
      } else {
        hideNumber.push(Number(myArray[i]));
      }
    }
    console.log(hideNumber);
  }

  return answer;
}

console.log(solution('aAb1B2cC34oOp'));

// 다른사람 의견
// function solution(my_string) {
//   const nums = my_string.match(/[0-9]+/g);
//   return nums ? nums.map(num => +num).reduce((a, c) => a + c, 0) : 0;
// }
