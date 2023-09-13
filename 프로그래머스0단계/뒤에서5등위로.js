function solution(num_list) {
  var answer = num_list.sort((a, b) => a - b);
  answer = answer.filter((item, index) => index > 4);
  return answer;
}
