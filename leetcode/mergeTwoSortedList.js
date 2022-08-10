/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;
  else if (list2.val < list1.val) {
    [list1, list2] = [list2, list1];
  }
  // console.log(list1.val, list2.val);
  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
};
mergeTwoLists([1, 2, 4], [1, 3, 4]);

// 배열합치는 방법
// result=[...a1,...a2]
// a1.push(a2)33
// a1.concat(a2)
// var mergeTwoLists = function (list1, list2) {
//   let mergeList = list1.concat(list2);
//   console.log(mergeList.sort((a, b) => a - b));
//   return mergeList.sort((a, b) => a - b);
// }; vscode에서는 작동되나 위에 정의 한 /** */ 때문에 실제 알고리즘에서 적용안됨
