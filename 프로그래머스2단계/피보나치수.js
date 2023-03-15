function solution(n) {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  f[2] = 1;
  for (let i = 3; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 1234567;
  }
  return f[n];
}

console.log(solution(3));
console.log(solution(5));

// 2개틀림
// function solution(n) {
//   let f = [];
//   f[0] = 0;
//   f[1] = 1;
//   f[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     f[i] = (f[i - 1] % 1234567) + (f[i - 2] % 1234567);
//   }
//   return f[n];
// }

// 7번부터 에러
// function solution(n) {
//   return F(n) % 1234567;
// }
// const F = (n) => {
//   if (n === 0) return 0;
//   else if (n === 1) return 1;
//   else return F(n - 1) + F(n - 2);
// };
