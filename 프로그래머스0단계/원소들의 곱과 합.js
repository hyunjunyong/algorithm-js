function solution(num_list) {
  let multiplication = 1;
  let sum = 0;
  num_list.map((item) => {
    sum += item;
    multiplication *= item;
  });
  return multiplication < Math.pow(sum, 2) ? 1 : 0;
}
