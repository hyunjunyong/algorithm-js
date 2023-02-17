function resolve(N) {
  let count = 0;
  for (let hour = 0; hour <= N; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      for (let second = 0; second < 60; second++) {
        if (
          hour.toString().includes('3') ||
          minute.toString().includes('3') ||
          second.toString().includes('3')
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(resolve(5));
