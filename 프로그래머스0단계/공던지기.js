// function solution(numbers, k) {
//   let start = 0;
//   for (let i = 0; i < k; i++) {
//     start += 2;
//     if (start > numbers.length) start -= numbers.length;
//   }
//   return numbers[start - 2];
// } 이거 테스트 케이스 20번, 22번안됨

function solution(numbers, k) {
  const index = (2 * (k - 1)) % numbers.length;
  return numbers[index];
}
