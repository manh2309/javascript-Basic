console.log("Hello world from JavaScript");
// when use for() => muốn duyệt qua tất cả các phần tử
const arr = ["Mu", "ManCity", "Chelsea", "Liver"];
for (let i = 0; i < arr.length; i++) {
  console.log("Champion  is: ", arr[i]);
}
let i = 0;
arr.forEach((element) => console.log("Top", i++ + 1, element));
// while/do

// while(true) === vô hạn
let j = 0;
while (j < arr.length) {
  console.log("Champion  is:.. ", arr[j]);
  j++;
}
let k = 0;
do {
  console.log(`Top ${k + 1} `, arr[k]);
} while (k < 0);

// do while khi điều kiện sai nhưng vẫn in kết quả 1 lần
// use while khi biết chính xác(muốn) in ra bao nhiêu
