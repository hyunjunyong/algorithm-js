/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

removeElement([3, 2, 2, 3], 3);

// var removeElement = function(nums, val) {
//   let i = 0
//   while (i < nums.length) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//     } else {
//       ++i
//     }
//   }
//   return nums.length
// }
