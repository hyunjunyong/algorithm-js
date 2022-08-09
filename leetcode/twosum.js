/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) return [i, j];
    }
  }
};

twoSum([3, 2, 3], 6);

// const twoSum = function(nums, target) {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//       if(comp[nums[i] ]>=0){
//           return [ comp[nums[i] ] , i]
//       }
//       comp[target-nums[i]] = i
//   }
// };
