/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let answer = [];
  s.split(' ').map((item) => {
    answer.push(item.split('').reverse().join(''));
  });
  return answer.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
