function solution(s) {
  return [
    Math.min.apply(null, s.split(' ')),
    Math.max.apply(null, s.split(' ')),
  ].join(' ');
}

console.log(solution('1 2 3 4'));

function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}
