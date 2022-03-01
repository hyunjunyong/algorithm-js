function solution(numbers) {
  //1~9까지의 합은 45,
  //따라서 45-numbers배열의 합을 하면됨
  return 45 - numbers.reduce((a, b) => a + b);
}

// 다른사람들의 풀이
// function solution(numbers) {
//   let answer = 0;

//   for(let i = 0; i <= 9; i++) {
//       if(!numbers.includes(i)) answer += i;
//   }

//   return answer;
// }
