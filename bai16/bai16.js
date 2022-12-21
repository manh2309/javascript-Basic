console.log("Hello World From JavaScript");

function getName(a, b) {
  return a + b; // đầu ra của function trả về kết quả
  //muốn thoát ra khỏi function ngay lập tức use "return"
}

console.log("check sum: ", getName(5, 8));
//arrow function được xem coi như 1 biến nhưng cách dùng giống 1 function
let sum = (a, b) => {
  return a + b;
};
console.log("check sum: ", sum(8, 4));
