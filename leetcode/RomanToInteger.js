/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let s1 = [];
  let sum = 0;
  let a = 0;
  s = s.toString().split('');
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        s1.push('1');
        break;
      case 'V':
        s1.push('5');
        break;
      case 'X':
        s1.push('10');
        break;
      case 'L':
        s1.push('50');
        break;
      case 'C':
        s1.push('100');
        break;
      case 'D':
        s1.push('500');
        break;
      case 'M':
        s1.push('1000');
        break;
      default:
        console.log('error');
    }
  }
  console.log(s1);
  for (let i = 0; i < s1.length; i++) {
    if (
      Number(s1[i + 1]) / 5 === Number(s1[i]) ||
      Number(s1[i + 1]) / 10 === Number(s1[i])
    ) {
      sum += -Number(s1[i]);
      // s1.splice(i + 1);
      console.log(s1);
    } else {
      sum += Number(s1[i]);
      // s1.splice(i);
    }
  }
  console.log(sum);
  return sum;
};

romanToInt('MCMXCIV');
// Runtime: 388 ms, faster than 5.02% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 52.1 MB, less than 7.81% of JavaScript online submissions for Roman to Integer.
