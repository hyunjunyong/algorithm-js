function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
    console.log(stack);
  }

  return stack.length ? 0 : 1;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));

// 에러 효율성 에러
// function solution(s) {
//   let i = 0;
//   let sArr = s.split('');

//   for (let i = 0; i < sArr.length; i) {
//     if (sArr[i] === sArr[i + 1]) {
//       sArr.splice(i, 2);
//       i = 0;
//     } else i++;
//   }

//   return sArr.length ? 0 : 1;
// }
