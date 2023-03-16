function solution(n) {
  let addN = n + 1;
  let oneSum = n
    .toString(2)
    .split('')
    .filter((e) => e === '1').length;
  while (true) {
    if (
      oneSum !==
      addN
        .toString(2)
        .split('')
        .filter((e) => e === '1').length
    )
      addN++;
    else break;
  }
  return addN;
}

console.log(solution(78));
console.log(solution(15));
