console.log("Hello world!".toUpperCase());
let a = 5;
let b = "5";
// 2 cách convert từ string -> number
let e = Number(b);
let e1 = +b;
console.log("e: ", typeof e, "e1: ", typeof e1);
// chỉ có 1 kiểu là số không phân biệt int and float
// ngoài "+" khi dùng '-, *, /' sẽ convert cùng kiểu và thực hiện
console.log(a === b, "a: ", typeof a, "b: ", typeof b);
