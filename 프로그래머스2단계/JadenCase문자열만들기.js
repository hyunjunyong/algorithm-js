// JadenCase문자열만들기.js
function solution(s) {
  let jaden = s.split(' ');
  for (let i = 0; i < jaden.length; i++) {
    jaden[i] = jaden[i]
      .split('')
      .map((item, index) => {
        if (typeof item === 'string' && index === 0)
          return (item = item.toUpperCase());
        else if (typeof item === 'string' && index !== 0)
          return (item = item.toLowerCase());
      })
      .join('');
  }

  return jaden.join(' ');
}
console.log(solution('3people unFollowed me'));
