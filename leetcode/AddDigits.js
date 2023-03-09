/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = Math.floor(num / 10) + (num % 10);
  }

  return num;
};

console.log(addDigits(29));
console.log(addDigits(11));
