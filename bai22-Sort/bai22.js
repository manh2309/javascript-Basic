console.log("Hello From JavaScript");

// const arr = [405, 210, 12, 1025];
// arr.sort((item1, item2) => {
//   return item1 - item2;
//   //  console.log(arr);
// });
// console.log(arr);
// so sánh từng cặp value
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);

console.log(items);
