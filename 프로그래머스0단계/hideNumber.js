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

console.log(solution('1a2b3c4d123Z'));

// 다른사람 의견
// function solution(my_string) {
//   const nums = my_string.match(/[0-9]+/g);
//   return nums ? nums.map(num => +num).reduce((a, c) => a + c, 0) : 0;
// }
// function solution(n) {
//   let answer = '';
//   for (let i = 0; i < n.length; i++) {
//     if (Number.isInteger(+n[i])) {
//       answer += n[i];
//     } else {
//       answer += ' ';
//     }
//   }
//   return answer.split(' ').reduce((acc, cur) => (acc += +cur), 0);
// }
