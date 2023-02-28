function solution(common) {
  lastIndex = common.length - 1;

  common[lastIndex] % common[lastIndex - 1] === 0 && common[1] !== 0
    ? common.push(Math.pow(common[lastIndex], 2) / common[lastIndex - 1])
    : common.push(common[lastIndex] * 2 - common[lastIndex - 1]);

  return common[common.length - 1];
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([0, 2, 4, 6]));
