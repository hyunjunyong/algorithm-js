function solution(num_list) {
  if (num_list.length > 10) {
    let sum = 0;
    num_list.map((item) => (sum += item));
    return sum;
  } else {
    let answer = 1;
    num_list.map((item) => (answer *= item));
    return answer;
  }
}
