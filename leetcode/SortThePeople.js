/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let hash = new Map();
  for (let i = 0; i < names.length; i++) {
    hash.set( heights[i],names[i]);
  }
  heights.sort((a, b) => b - a);
  
  return heights.map((item) =>hash.get(item));
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));

// const sortPeople = (names, heights) => 
//   names.map((name, i) => [ heights[i], name ])
//   .sort((a, b) => b[0] - a[0])
//   .map(el => el[1])