console.log("Hello World from JavaScript");
let arr4 = ["Liver", "ManCity", "Chelsea", "Mu"];

let i = 0;
while (i < arr4.length) {
  i++;
  if (arr4[i] === "Chelsea") {
    console.log("Top ", arr4[i]);

    continue; // thoát ra vòng lặp nhưng vẫn duyệt arr
  }
  console.log("found it ", i);
}
