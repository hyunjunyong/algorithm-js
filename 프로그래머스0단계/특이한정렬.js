function solution(numlist, n) {
  numlist.sort((a, b) => {
    const [i, j] = [Math.abs(a - n), Math.abs(b - n)];
    if (i === j) return b - a;
    return i - j;
  });
  return numlist;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));

// function solution(numlist, n) {
//   return numlist
//     .sort((a, b) => b - a)
//     .sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
// }
