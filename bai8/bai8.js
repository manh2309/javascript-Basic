console.log("Hello World from JavaScript");
// It is object
// key: value
// object có thể chưa function
let obj = {
  name: "manh",
  address: "ha noi",
  a: function () {
    console.log("hello");
    return "";
  },
};
let b = "name";
obj[b] = "hary";
//Json
JSON;
("{name: 'Manh', address: 'Ha Noi'}");
console.log("what is your name", `My name is: ${obj.name}`);
console.log("what is your name", `My name is:`, obj.name);
console.log("what is your name", `My name is:`, obj["name"]);
console.log("where ar you from", `I'm from`, obj.address);
console.log("type of a:", typeof a, "type of b:", typeof b);
console.log("call function: ", obj.a());
