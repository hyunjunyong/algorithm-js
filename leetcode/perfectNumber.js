/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let answer = 0;
  for (let i = 0; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      answer += i;
      if (num / i != i) answer += num / i;
    }
  }
  return answer === num * 2 ? true : false;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
