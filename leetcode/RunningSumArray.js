/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let a = [];
  let sum = 0;
  return nums.reduce((acc, cur) => {
    sum += cur;
    a.push(sum);
    return a;
  }, []);
};

// 1480Problem
