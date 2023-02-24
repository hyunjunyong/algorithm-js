function solution(s) {
  let sArray = s.split(' ');
  var answer = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === 'Z') {
      answer -= Number(sArray[i - 1]);
    } else {
      answer += Number(sArray[i]);
    }
  }
  return answer;
}
console.log(solution('10 Z 20 Z 1'));
