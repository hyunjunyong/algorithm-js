function solution(common) {
  lastIndex = common.length - 1;

  common[lastIndex] % common[lastIndex - 1] === 0 && common[0] !== 0
    ? common.push(Math.pow(common[lastIndex], 2) / common[lastIndex - 1])
    : common.push(common[lastIndex] * 2 - common[lastIndex - 1]);

  return common[common.length - 1];
}
// fail test3 에러남

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([0, 0, 0]));

function solution(common) {
  // pass
  const sameMinus = common[1] - common[0] === common[2] - common[1];
  if (sameMinus) {
    return common[common.length - 1] + common[1] - common[0];
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}
