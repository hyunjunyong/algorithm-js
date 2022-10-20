/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let a = [];
  nums.map((index) => {
    a.push(nums[index]);
  });
  return a;
};
