console.log("Hello World from JavaScript");
let a = {
  name: "Manh",
  age: 18,
};
console.log(a);
console.log("My name 's", a.name);

// Arr = [item1, item2] có thể chứa obj
let b = ["MU", "Chelsea", "Liver"];

console.log(b[0]);

let family = [
  {
    name: "Manh",
    age: 18,
  },
  {
    name: "Minh",
    age: 18,
  },
  {
    name: "hanh",
    age: 18,
  },
];
console.log("My family: ", family);
for (let i = 0; i < family.length; i++) {
  if (family[i].age === 18) {
    console.log(family[i].name);
  } else {
    console.log("Không có ai tuổi = 18");
  }
}
