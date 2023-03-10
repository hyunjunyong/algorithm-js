// MinimumIndexSumOfTwoList.js
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let answer = [];
  let outPut = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] == list2[j]) {
        answer.push([i + j, list1[i]]);
      }
    }
  }
  answer.sort((a, b) => a[0] - b[0]);
  answer.map((item) => {
    if (answer[0][0] === item[0]) outPut.push(item[1]);
  });
  return outPut;
};

console.log(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good']));
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
);

// map 활용
// var findRestaurant = function(list1, list2) {
//   const hashmap = new Map();
//   let output;

//   for (let i = 0; i < list1.length; i++) {
//       hashmap.set(list1[i], i);
//   }

//   for (let j = 0; j < list2.length; j++) {
//       const isExist = hashmap.has(list2[j]);
//       const indexOfRestaurant = hashmap.get(list2[j]);
//       if (isExist && (!output || j + indexOfRestaurant < output.sumIndex)) {
//           output = {
//               value: [list2[j]],
//               sumIndex: j + indexOfRestaurant,
//           }
//       } else if (isExist && j + indexOfRestaurant === output.sumIndex) {
//           output.value.push(list2[j]);
//       }
//   }

//   return output.value;
// };
