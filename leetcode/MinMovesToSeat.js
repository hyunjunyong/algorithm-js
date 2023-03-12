/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => b - a);
  students.sort((a, b) => b - a);
  let answer = [];
  for (let i = 0; i < seats.length; i++) {
    students[i] - seats[i] > 0
      ? answer.push(students[i] - seats[i])
      : answer.push((students[i] - seats[i]) * -1);
  }
  return answer.reduce((acc, cur) => acc + cur);
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
console.log(minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]));
