function solution(numlist, n) {
  numlist.sort((a, b) => {
    const [i, j] = [Math.abs(a - n), Math.abs(b - n)];
    if (i === j) return b - a;
    return i - j;
  });
  return numlist;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
