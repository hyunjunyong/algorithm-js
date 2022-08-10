/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  console.log(nums);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
  return nums;
};

removeDuplicates([1, 1, 2]);

//아니 왜안되;;;
