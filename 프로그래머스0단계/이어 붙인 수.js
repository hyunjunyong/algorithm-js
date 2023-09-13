function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.map((item) => {
    if (item % 2 === 0) {
      if (odd === 0) odd = item;
      else odd = 10 * odd + item;
    } else {
      if (even === 0) even = item;
      else even = 10 * even + item;
    }
  });
  return odd + even;
}
