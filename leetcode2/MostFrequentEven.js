// MostFrequentEven.js
/**
 * @param {number[]} nums
 * @return {number}
 */

const mostFrequentEven = (nums, value = '-1') => {
  const obj = nums.reduce((result, acc) => {
    if (acc % 2 === 0) result[acc] ? (result[acc] += 1) : (result[acc] = 1);
    return result;
  }, {});

  for (let properties in obj)
    if (obj[properties] > (obj[value] || value)) value = properties;

  return +value;
};
// var mostFrequentEven = function (nums) {
//   const hashmap = new Map();
//   let output;

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (!(num % 2)) {
//       const newValue = hashmap.get(num) + 1;
//       hashmap.set(num, hashmap.has(num) ? newValue : 1);
//       if (output === undefined || newValue > hashmap.get(output)) {
//         output = num;
//       } else if (hashmap.get(num) === hashmap.get(output)) {
//         output = Math.min(num, output);
//       }
//     }
//     console.log(hashmap);
//   }

//   return output === undefined ? -1 : output;
// };

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
