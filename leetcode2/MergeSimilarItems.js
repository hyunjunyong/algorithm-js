// MergeSimilarItems.js
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const ans = {};

  const items = [...items1, ...items2];

  for (let [v, w] of items) {
    console.log(v, w);
    if (ans[v]) {
      ans[v] += w;
    } else {
      ans[v] = w;
    }
    console.log(ans);
  }

  return Object.entries(ans);
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);

// 시간초과
// /**
//  * @param {number[][]} items1
//  * @param {number[][]} items2
//  * @return {number[][]}
//  */
// const mergeSimilarItems = (items1, items2) => {
//   let vwMap = new Map();

//   for (let [value, weight] of items1.concat(items2)) {
//     if (!vwMap.has(value)) {
//       vwMap.set(value, weight);
//     } else {
//       vwMap.set(value, vwMap.get(value) + weight);
//     }
//     console.log(vwMap);
//   }

//   return Array.from(vwMap.entries()).sort((a, b) => a[0] - b[0]);
// };
