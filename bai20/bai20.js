console.log("Hello world from JavaScrip");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// cách dưới là thay đổi trực tiếp dữ liệu của mảng đã tạo
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * arr[i];
// }

// console.log(" Check arr:", arr);
//Map sẽ tạo ra 1 mảng mới ko tác động gì đến mảng đã tạo ban đầu

let mapArr = arr.map((item, index) => {
  item = item * item;
  return item;
});
console.log(" Check arr:", arr);
console.log(" Check MapArr:", mapArr);
