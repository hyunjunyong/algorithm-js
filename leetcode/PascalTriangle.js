/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let result = [];

  for (let i = 0; i <= numRows - 1; i++) {
    let arr = new Array(i + 1); // create an array of length i + 1

    // first and last of array is 1;
    arr[0] = 1;
    arr[i] = 1;

    // in between do math
    for (let j = 1; j <= i - 1; j++) {
      arr[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(arr);
  }

  return result;
};
console.log(generate(5));
// 118. Pascal's Triangle
