function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    answer++;
    while (answer % 3 === 0 || answer.toString().includes(3)) answer++;
  }
  return answer;
}

console.log(solution(15));
console.log(solution(40));

// function solution(n) {
//     let arr = [];
//     let num = 0;
//     while (arr.length !== n && ++num) if (num%3!==0 && !(''+num).includes('3')) arr.push(num);
//     return arr.pop();
// }
