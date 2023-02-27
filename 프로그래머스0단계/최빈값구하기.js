function solution(array) {
  let arr = new Map();
  for (let i = 0; i < array.length; i++) {
    arr.set(array[i], (arr.get(array[i]) || 0) + 1);
  }
  let max = Math.max(...[...arr].map((v) => v[1]));
  let count = [...arr].filter((v) => v[1] === max).length;
  return count > 1 ? -1 : [...arr].find((v) => v[1] === max)[0];
}

console.log(solution([1, 2, 3, 3, 3, 4]));

// function solution(array) {
//   let m = new Map();
//   for (let n of array) m.set(n, (m.get(n) || 0)+1);
//   m = [...m].sort((a,b)=>b[1]-a[1]);
//   return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }
