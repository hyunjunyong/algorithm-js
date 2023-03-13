// NumberAfterDoubleReversal.js
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let reverseNum = Number([...num.toString()].reverse().join(''));

  return num === Number([...reverseNum.toString()].reverse().join(''))
    ? true
    : false;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));

// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isSameAfterReversals = function(num) {
//   return !num || num%10;
// };
