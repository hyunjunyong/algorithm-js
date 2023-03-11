// SmallerThanTheCurrentNumber.js

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    nums.map((item) => {
      if (nums[i] > item) sum++;
    });
    answer.push(sum);
    sum = 0;
  }
  return answer;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// // 위해답은 너무느리고 메모리 용량도 많이 차지함
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var smallerNumbersThanCurrent = function (nums) {
//   let hash = new Map();
//   let sorted = nums.slice().sort((a, b) => a - b);
//   sorted.forEach((number, idx) => {
//     hash.has(number) ? null : hash.set(number, idx);
//     console.log(hash);
//   });
//   return nums.map((x) => hash.get(x));
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
