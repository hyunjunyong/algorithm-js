/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [];

  for (let i = 0; i <= rowIndex; i++) {
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

  return result[rowIndex];
};

console.log(getRow(3));
// 119. Pascal's Triangle II
