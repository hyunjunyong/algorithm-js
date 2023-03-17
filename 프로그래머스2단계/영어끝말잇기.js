function solution(n, words) {
  let answer = [];
  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      words.indexOf(words[i]) < i ||
      words[i].length < 2
    ) {
      console.log(i);
      answer = [(i + 1) % n || n, Math.ceil((i + 1) / n)];
      return answer;
    }
  }
  if (answer.length === 0) return [0, 0];
}

console.log(solution(2, ['ac', 'ca', 'ac', 'ac']));
