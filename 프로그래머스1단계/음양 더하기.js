function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = -absolutes[i];
    }
  }

  return absolutes.reduce((a, b) => a + b);
}

// function solution(absolutes, signs) {

//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
