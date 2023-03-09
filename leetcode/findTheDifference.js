/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let answer = '';
  let sArr = s.split('');
  let tArr = t.split('');
  t.split('').map((item) => {
    if (sArr.includes(item)) {
      for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === item) {
          sArr.splice(i, 1);
          return;
        }
      }
    } else {
      answer = item;
    }
  });
  return answer;
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('a', 'aa'));

// var findTheDifference = function(s, t) {
//   s = s.split('').sort();
//   t = t.split('').sort();

//   for(let i = 0; i < t.length; i++){
//       if(s[i] !== t[i]) return t[i]
//   }

//   return ""
// };
