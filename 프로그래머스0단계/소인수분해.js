function solution(n) {
  var answer = [];
  let i = 2;
  while (n !== 1) {
    if (n % i === 0) {
      answer.push(i);
      n = n / 2;
      i = 2;
    } else {
      i++;
    }
  }
  return [...new Set(answer)];
}

function solution(n) {
  const smallNumber = [];
  let idx = 2;
  // n이 0이 될때까지
  while (n !== 1) {
    // n의 약수라면 배열에 추가
    if (n % idx === 0) {
      smallNumber.push(idx);
      n /= idx;
      idx = 2;
    } else {
      idx += 1;
    }
  }
  // 중복 제거하여 반환
  return Array.from(new Set(smallNumber));
}
console.log(solution(12));
