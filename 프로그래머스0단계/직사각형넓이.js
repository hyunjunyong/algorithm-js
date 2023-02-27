function solution(dots) {
  var answer = 0;
  let width = [];
  let height = [];
  for (let i = 0; i < dots.length; i++) {
    width.push(dots[i][0]);
    height.push(dots[i][1]);
  }
  width.sort((a, b) => a - b);
  height.sort((a, b) => a - b);
  return Math.abs(width[0] - width[3]) * Math.abs(height[0] - height[3]);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
