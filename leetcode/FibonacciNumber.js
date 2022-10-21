/**
 * @param {number} n
 * @return {number}
 */
var fib = function fn(n) {
  let sum = 0;
  if (n <= 1) return n;
  else return fn(n - 1) + fn(n - 2);
};
console.log(fib(4));
// FibonacciNumber.js 509
