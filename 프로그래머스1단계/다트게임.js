function solution(dartResult) {
  var score = 0;
  var answer = [];
  var temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      answer.push(temp);
    } else if (dartResult[i] === 'D') {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === 'T') {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    score += Number(answer[i]);
  }

  return score;
}
// S 1제곱 D 2제곱 , T 3제곱
// * 바로전에 얻은점수 , 해당전에 얻은 점수 2배
// #해당점수 # 해당점수 마이너스
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다.
//  이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
console.log(solution('1D2S3T*'));
console.log(solution('1T2D3D#'));
