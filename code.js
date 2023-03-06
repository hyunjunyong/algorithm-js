const nowDate = (date) => {
  console.log(date);
  console.log(new Date(date));
  let currentDate = new Date(date).toString();
  // currentDate.setHours(currentDate.getUTCHours() + 9);
  return currentDate;
};

console.log(nowDate('Fri Mar 03 2023 15:33:36 GMT+0900 (한국 표준시)'));
