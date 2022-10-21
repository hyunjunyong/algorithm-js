/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSum(nums) {
  let sum = 0;
  let i = nums.filter((e) => {
    if (e < 0) return e;
  });

  if (nums.length % 2) {
    if (i) {
      i = Math.max(...i);
    } else i = 0;
    nums.map((item, i) => {
      if (item > 0) sum += item;
    });
    sum += i;
    return sum;
  } else {
    nums.map((item, i) => {
      if (item > 0) sum += item;
    });
  }
  return sum;
}

console.log(maxSum([7, 3, 5, -2, 9]));
console.log(maxSum([10, -10]));
console.log(maxSum([1, 2, 4, 8, 16]));
console.log(maxSum([7, 3, -7, 5, -3]));
