function resolve(n, k) {
  let answer = 0;
  while (n !== 1) {
    n % k ? (n -= 1) : (n /= k);
    answer++;
  }
  return answer;
}

console.log(resolve(25, 5));
console.log(resolve(25, 3));
