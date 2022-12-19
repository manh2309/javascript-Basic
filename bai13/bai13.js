console.log("Hello World from JavaScript");

// let arr4 = ["Liver", "ManCity", "Chelsea", "Mu"];
// let i = 0;
let day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break;
  default:
    day = "Làm gì có";
    console.log(day);
    break;
}
