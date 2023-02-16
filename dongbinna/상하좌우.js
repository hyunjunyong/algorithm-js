function resolve(m, array) {
  let start = [1, 1];
  array.map((item) => {
    switch (item) {
      case 'L':
        if (start[1] - 1 !== 0) start[1] -= 1;
        break;
      case 'R':
        if (start[1] + 1 <= m) start[1] += 1;
        break;
      case 'U':
        if (start[0] - 1 !== 0) start[0] -= 1;
        break;
      case 'D':
        if (start[0] + 1 <= m) start[0] += 1;
        break;
    }
  });
  return start;
}

console.log(resolve(5, ['R', 'R', 'R', 'U', 'D', 'D']));
