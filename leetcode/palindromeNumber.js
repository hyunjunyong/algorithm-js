/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let a = [];
  let i = 0;
  if (x < 0) return false;

  do {
    a.push(x % 10);
    x = Math.floor(x / 10);
  } while (x > 0);
  if (a.length / 2 === 0) return false;
  else {
    while (i < Math.ceil(a.length / 2)) {
      if (a[i] !== a[a.length - i - 1]) return false;
      else {
        i++;
        continue;
      }
    }
    return true;
  }
};
isPalindrome(1000021);
// 0123456
// 1000021
//대칭이 되야하니까
// 음수 안되고
// 숫자를 배열로 나눴을때 길이가 홀수여야함

// Runtime: 300 ms, faster than 37.79% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 50.8 MB, less than 74.91% of JavaScript online submissions for Palindrome Number.
