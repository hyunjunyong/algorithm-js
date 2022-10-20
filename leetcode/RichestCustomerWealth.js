/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let a = [];
  for (let i = 0; i < accounts.length; i++) {
    a.push(
      accounts[i].reduce((acc, cur) => {
        return acc + cur;
      })
    );
  }
  return Math.max(...a);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
// 1672
