function resolve(n, m, array) {
  let leastNumber = [];
  for (let i = 0; i < n; i++) {
    // Math.min(...array[i])
    // Math.max(...array[i])
    array[i].sort((a, b) => a - b);
    leastNumber.push(array[i][0]);
  }
  leastNumber.sort((a, b) => a - b);
  console.log(leastNumber);
  return leastNumber[leastNumber.length - 1];
}
console.log(
  resolve(3, 3, [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);
console.log(
  resolve(2, 4, [
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
);
