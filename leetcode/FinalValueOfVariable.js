/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let sum = 0;
  operations.map((item) => {
    if (item === 'X++' || item === '++X') sum += 1;
    else sum -= 1;
  });
  return sum;
};
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
// 2011
