console.log("Hello world from JavaScript");

let sum = (a, b) => {
  return a + b;
};

console.log("Check sum: ", sum(4, 8));

let obj = {
  name: "Manh",
  address: "Hà Nội",
  getName: function () {
    return this.name;
  },
};
console.log("Check Get Name: ", obj.getName());

//sai
class User {
  sum1 = (a, b) => {
    return a + b;
  };
}
//sai
console.log("In text", this.sum1());
//function vs method => reuse
//medthod thường đứng trong 1 obj hoặc 1 class
