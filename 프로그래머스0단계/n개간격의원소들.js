function solution(num_list, n) {
  let answer = [];
  num_list.map((item, index) => {
    if (index % n === 0) answer.push(item);
  });
  return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));
