function solution(n, lost, reserve) {
  var answer = 0;
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (lost[j] == reserve[i] - 1) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        //체육복 안가져온애 앞에 있으면 빌려줌
      } else if (lost[j] != reserve[i] - 1 && reserve[i] + 1 == lost[j]) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        //체육복 안가져온애 앞에 없고 뒤에애가 있으면 빌려줌
      }
    }
  }
  return n - lost.length;
}

//1단계맞냐 왤케헬이냐...
