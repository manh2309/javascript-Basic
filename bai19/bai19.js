console.log("Hello world from HTML");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
  { name: "Manh", age: 28 },
  { name: "Manh1", age: 24 },
  { name: "Manh2", age: 23 },
  { name: "Manh3", age: 28 },
  { name: "Manh4", age: 40 },
];
//filter, find
// const result = arr.filter((arr) => arr > 5);

// console.log(result);

let filter = arr.filter((item, index) => {
  // item là các phần tử có trong mảng, index là vị trí của các phần tử trong mảng
  console.log(">>> check item: ", item, ">>>> Check index: ", index);
  return item && item.age === 28;
});

console.log(filter);
// find => ko thỏa mãn đk return undefind && trả ra phần tử thỏa mãn đk đầu tiên r in ra
let Find = arr.find((item, index) => {
  // item là các phần tử có trong mảng, index là vị trí của các phần tử trong mảng
  console.log(">>> check item: ", item, ">>>> Check index: ", index);
  return item && item.age === 31;
});

console.log(Find);
