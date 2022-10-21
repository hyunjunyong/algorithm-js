function solution(nums) {
  nums = nums.split('').sort();
  let answer = [...new Set(nums)];
  let answer1 = [...answer];
  while (nums.length > 0) {
    console.log(answer);
    for (i = 0; i < answer.length; i++) {
      nums.splice(nums.indexOf(answer[i]), 1);
    }
    answer = [...new Set(nums)];

    answer1.push(...answer);
  }

  return answer1;
}

// function solution(nums) {
//   if(nums === '') return nums;
//   nums = nums.split('').sort();
//   let answer = [...new Set(nums)];
//   let answer1 = [];
//   if(nums.length >0){

//   }else{

//   }

//   return answer;
// }
console.log(solution('execute'));
// console.log(solution('cucumber'));
// console.log(solution('bbaabd'));
/* 
aabbbd
  
*/
