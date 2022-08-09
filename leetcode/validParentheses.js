/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let i = 0;
  let valid = { 1: '(', 2: ')', 3: '{', 4: '}', 5: '[', 6: ']' };
  console.log(valid[1]);
  s = s.toString().split('');
  while (i < s.length) {
    if (s[i] === valid[1] && s[i + 1] === valid[2]) return true;
    else if (s[i] === valid[3] && s[i + 1] === valid[4]) return true;
    else if (s[i] === valid[5] && s[i + 1] === valid[6]) return true;
    else return false;
  }
};

isValid(1, 2, 3);

// var isValid = function(s) {
//   let stack = [];
//   const map = {
//       ')' : '(',
//       '}' : '{',
//       ']' : '['
//   }
//   for(let i = 0; i < s.length;i++){
//       if(stack.length !== 0 && map[s[i]] === stack[stack.length - 1]){ // making sure stack is not empty and comparing current element with stack's last element
//           stack.pop(); // If we find the same elements remove from stack
//       }else{
//           stack.push(s[i]); // else add s[i] to stack
//       }
//   }
//   return !stack.length  // at the end return whether stack is empty or not
// };
