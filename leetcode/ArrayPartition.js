/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = [];
  nums.reduce((acc, cur, i) => {
    if (i % 2 === 0) answer.push(cur);
  }, []);
  return answer.reduce((acc, cur) => acc + cur);
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));

// for문이 더빠를수도있는데 reduce활용도 높이기위해
