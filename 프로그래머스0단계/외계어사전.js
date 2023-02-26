function solution(spell, dic) {
  let index = 0;
  var answer = 0;
  for (let i = 0; i < dic.length; i++) {
    spell.map((item) => {
      if (dic[i].includes(item)) index++;
    });
    console.log(index);
    index === spell.length ? (answer = 1) : (answer = 2);
    index = 0;
    if (answer === 1) return answer;
  }
  return answer;
}

console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
