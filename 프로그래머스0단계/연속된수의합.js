function solution(num, total) {
  function sum(a) {
    let sum = 0;
    for (let i = 0; i < a; i++) {
      sum += i;
    }
    return sum;
  }
  var answer = [];
  let x = sum(num);
  for (let i = 0; i < num; i++) {
    answer.push((total - x) / num + i);
  }

  return answer;
}
// x*num +  sum(x) = total

console.log(solution(3, 12));

// function solution(num, total) {
//     var min = Math.ceil(total/num - Math.floor(num/2));
//     var max = Math.floor(total/num + Math.floor(num/2));

//     return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
// }
