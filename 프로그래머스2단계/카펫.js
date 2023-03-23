// 1. yellow의 width = yellow / 1 = 2
// 2. 카펫의 width = yellow / 1 + 2 = 4, 양옆에 brown을 하나씩 더해준다
// 3. yellow의 height = yellow를 나눈 정수 = 1
// 4. 카펫의 height = 1 + 2 = 3, yellow높이에 위아래 brown을 하나씩 더해준다.
// 계산한 총 brown 개수 = (카펫의 width * 2) + (yellow의 height * 2)와 주어진 brown개수 비교.

const solution = (brown, yellow) => {
  for (let i = 1; i <= yellow; i++) {
    // i는 yellow의 height
    if (!Number.isInteger(yellow / i)) {
      // 정수로 나누어지지않으면 continue.
      continue;
    }
    const n = yellow / i; // n = yellow의 width
    const width = n + 2; // width = 카펫의 width
    const height = i + 2; // height = 카펫의 height

    if (i * 2 + width * 2 === brown) {
      // (yellow의 height * 2 + 카펫의 width * 2 === brown)
      return [width, height];
    }
  }
};

console.log(solution(18, 6));

// function solution(brown, red) {
//   var answer = [];
//   for (var i = 3; i <= (brown+red)/i; i++) {
//       var x = Math.floor((brown+red)/i);
//       if( (x-2)*(i-2)=== red) {
//           break;
//       }
//   }

//   return [x,i];
// }
