function solution(A, B) {
  var answer = 0;
  let arrayA = A.split('');
  let arrayB = B.split('');
  for (let i = 0; i < arrayA.length; i++) {
    console.log(arrayA, arrayB);
    if (JSON.stringify(arrayA) === JSON.stringify(arrayB)) return answer;
    arrayA.unshift(arrayA[arrayA.length - 1]);
    arrayA.pop();
    answer++;
  }
  if (JSON.stringify(arrayA) !== JSON.stringify(arrayB)) return -1;
}

console.log(solution('hello', 'ohell'));
