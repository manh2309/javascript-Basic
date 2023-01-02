console.log("Hello world HTML");
let arr = [0, 1, 2, 3, 4];

let ReduceArr = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(ReduceArr);

//reduce có thêm phần tử init
let ReduceArr1 = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
console.log(ReduceArr1);
