var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var div = document.getElementById("coolDiv");
let right = "50%" - "10%";
let tru = 30;

button1.onclick = function () {
  div.style.right = tru;
};

// Thiết lập click cho button 2
button2.onclick = function () {
  div.style.right = right - tru;
  console.log(right);
};
