/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let a = [];
  let b = [];
  let c = [];

  for (let i = 0; i < sentences.length; i++) {
    a.push(sentences[i].toString());
  }

  for (let i = 0; i < a.length; i++) {
    b.push(a[i].split(' '));
  }
  for (let i = 0; i < b.length; i++) {
    c.push(b[i].length);
  }
  return Math.max(...c);
};
console.log(
  mostWordsFound([
    'this is great thanks very much',
    'alice and bob love leetcode',
    'i think so too',
  ])
);
// 2114
// var mostWordsFound = function(sentences) {
//   let max = 0;
//   for (let sentence of sentences) {
//       let words = sentence.split(' ');
//       max = Math.max(max, words.length)
//   }
//   return max;
// };
