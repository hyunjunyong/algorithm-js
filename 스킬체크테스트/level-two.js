function solution(land) {
  let max = [];
  for (let i = 0; i < land.length; i++) {
    let firstIdx = 0;
    for (let j = 0; j < land[i].length; j++) {
      if (firstIdx <= land[i][j] && i === 0) {
        firstIdx = land[i][j];
      } else if (firstIdx <= land[i][j] && i > 0) {
        if (j === land[i - 1].indexOf(max[max.length - 1])) {
          firstIdx = land[i].sort((a, b) => a - b)[2];
        } else {
          firstIdx = land[i][j];
        }
      }
    }
    max.push(firstIdx);
  }
  return max.reduce((acc, cur) => acc + cur);
  // return max;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);

// function solution(n, k) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   var answer = [];
//   return answer[k];
// }

// console.log(solution(3, 5));
