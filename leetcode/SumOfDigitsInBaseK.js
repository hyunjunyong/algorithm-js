// SumOfDigitsInBaseK.js
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  return [...n.toString(k)].reduce((acc, cur) => acc + +cur, 0);
};

console.log(sumBase(34, 6));
console.log(sumBase(42, 2));
