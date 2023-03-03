function solution(s, skip, index) {
  let sArray = s.split('').map((item) => item.charCodeAt(0));

  return sArray
    .map((item) => {
      for (let i = 0; i < index; i++) {
        if (item === 'z'.charCodeAt()) {
          item -= 26;
        }
        if (skip.indexOf(String.fromCharCode(item + 1)) === -1) {
          item = item + 1;
        } else {
          item = item + 1;
          i--;
        }
      }
      return String.fromCharCode(item);
    })
    .join('');
}

console.log(solution('aukks', 'wbqd', 5));
console.log(solution('ybcde', 'az', 1));
