function solution(dots) {
  const getInclination = ([[x1, y1], [x2, y2]]) =>
    x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity;
  const isParallel = (line1, line2) =>
    getInclination(line1) === getInclination(line2);

  return dots.some((dot) => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter((dot) => !line1.includes(dot));
    return isParallel(line1, line2);
  })
    ? 1
    : 0;
}

// 다른풀이
// function solution(dots) {
//   if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//       return 1;
//   if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//       return 1;
//   if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//       return 1;
//   return 0;
// }

// function calculateSlope(arr1, arr2) {
//   return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }

// console.log(
//   solution([
//     [1, 4],
//     [9, 2],
//     [3, 8],
//     [11, 6],
//   ])
// );
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);

// test case 12~~ fail
// function solution(dots) {
//   var answer = 0;
//   let arr = [];
//   for (let i = 0; i < dots.length; i++) {
//     for (let j = i + 1; j < dots.length; j++) {
//       const curLean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
//       arr.push(curLean);
//     }
//   }

//   return JSON.stringify([...new Set(arr)]) === JSON.stringify(arr) ? 0 : 1;
// }
