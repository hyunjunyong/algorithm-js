function solution(n, lost, reserve) {
  var answer = 0;
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (lost[j] == reserve[i]) {
        reserve.splice(j, 1);
        lost.splice(j, 1);
      } //체육복 여벌있고 도둑
      if (lost[j] == reserve[i] - 1) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        //체육복 안가져온애 앞에 있으면 빌려줌
      } else if (lost[j] != reserve[i] - 1 && lost[j] == reserve[i] + 1) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        //체육복 안가져온애 앞에 없고 뒤에애가 있으면 빌려줌
      }
    }
  }
  return n - lost.length;
}
//체육복 1벌
//체육복 여벌있고 도둑
//체육복 여벌있
//체육복 도둑

//1단계맞냐 왤케헬이냐...
function solution(n, lost, reserve) {
  // 체육복을 잃어버렸으면서 여벌이 없는 경우
  const realLost = lost.filter((element) => !reserve.includes(element));

  // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
  let realReserve = reserve.filter((element) => !lost.includes(element));

  // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
  return (
    // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
    n -
    realLost.filter((lost) => {
      // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
      const lend = realReserve.find(
        // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
        (reverse) => Math.abs(reverse - lost) == 1
      );

      // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
      if (!lend) return lost;
      // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
      realReserve = realReserve.filter((reverse) => reverse !== lend);
    }).length
  );
}
