/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let answer = [0, 1, 1];
  for (let i = 0; i < n; i++) {
    answer.push(answer[i] + answer[i + 1] + answer[i + 2]);
  }
  return answer[n];
};
console.log(tribonacci(4));

// 1137. N-th Tribonacci Number
// var tribonacci = function(n, cache={}) {
//   if(n===0)
//       return 0;
//   if(n===1 || n===2)
//       return 1;
//   if(cache[n])
//       return cache[n];
//   cache[n]=tribonacci(n-1, cache) + tribonacci(n-2, cache) + tribonacci(n-3, cache);
//   return cache[n];
// };

// var tribonacci = function(n){
//   if(n===0)
//       return 0;
//   if(n<=2)
//       return 1;
//   let arr=[0, 1, 1], i=0;
//   while(i<=n-3){
//       let temp = arr[i]+arr[i+1]+arr[i+2];
//       arr.push(temp);
//       i++;
//   }
//   return arr[arr.length-1];
// }

// var tribonacci = function(n){
//   if(n===0)
//       return 0;
//   let arr=[0, 1, 1];
//   while(n>2){
//       let temp = arr[0]+arr[1]+arr[2];
//       arr[0]=arr[1];
//       arr[1]=arr[2];
//       arr[2]=temp;
//       n--;
//   }
//   return arr[2];
// }
