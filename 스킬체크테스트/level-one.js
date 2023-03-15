// function solution(n, m) {
//   var answer = [];
//   let index = 1;
//   for (let i = 1; i <= Math.min(n, m); i++) {
//     if (n % i === 0 && m % i === 0) answer[0] = i;
//   }
//   answer[1] = (n * m) / answer[0];
//   return answer;
// }

// console.log(solution(3, 12));
// console.log(solution(2, 5));

function solution(phone_number) {
  let arr = phone_number.split('');
  return arr
    .map((item, index) => {
      if (arr.length > index + 4) return (item = '*');
      else return item;
    })
    .join('');
}

console.log(solution('01033334444'));
