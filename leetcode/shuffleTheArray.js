/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let a = nums.filter((item, i) => {
    if (i < n) return item;
  });
  let b = nums.filter((item, i) => {
    if (i >= n) return item;
  });
  console.log(a, b);
  let c = [];
  a.map((item, i) => {
    c.push(item);
    c.push(b[i]);
  });
  return c;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// var shuffle = function(nums, n) {
//   const output = new Array(2*n);
//   for (let i = 0; i < n; i++) {
//       output[2*i] = nums[i];
//       output[2*i+1] = nums[n+i];
//   }
//   return output;
// };
