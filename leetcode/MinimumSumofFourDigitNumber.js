/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = (num) => {
  let nums = String(num).split('');
  nums = nums.filter((e) => {
    return e !== '0';
  });
  nums = nums.sort((a, b) => a - b).map((e) => Number(e));
  switch (nums.length) {
    case 0:
      return 0;
    case 1:
      return nums[0];
    case 2:
      return nums[0] + nums[1];
    case 3:
      return nums[0] * 10 + nums[1] + nums[2];
    case 4:
      return (nums[0] + nums[1]) * 10 + nums[2] + nums[3];
  }
};

console.log(minimumSum(4102));
// Minimum Sum of Four Digit Number 2160
