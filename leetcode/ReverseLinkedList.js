/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const helper = (current, prev) => {
    if (current === null) return prev;
    // next node
    let next = current.next;
    // append previous nodes in current
    current.next = prev;
    return helper(next, current);
  };
  return helper(head, null);
};

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2]));
// var reverseList = function (head) {
//   let answer = [];
//   for (let i = head.length - 1; i > -1; i--) {
//     answer.push(head[i]);
//   }
//   return answer;
// }; 그냥 순수 배열일떄 이렇게
// ReverseLinkedList.js  206
