function solution(id_pw, db) {
  var answer = [];
  for (let i = 0; i < db.length; i++) {
    console.log(db[i][0]);
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) answer.push('login');
    else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1])
      answer.push('wrong pw');
    else answer.push('fail');
  }
  if (answer.includes('login')) return 'login';
  else if (answer.includes('wrong pw')) return 'wrong pw';
  else return 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
);
