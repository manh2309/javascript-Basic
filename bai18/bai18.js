console.log("Hello World from HTML");

let sum = (a, b, callback) => {
  let total = a + b;
  setTimeout(() => {
    callback(total);
  }, 3000);

  //setInterval lặp vô hạn
  //   let timer = setInterval(() => {
  //     for (let i = 1; i < 10; i++) {
  //       if (i === 5) {
  //         clearInterval(timer);
  //         break;
  //       } else {
  //         callback(total);
  //       }
  //     }
  //   }, 1000);
  let i = 0;
  let timer = setInterval(() => {
    callback(total);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 1000);
};
let printSum = (message) => {
  console.log("Check sum: ", message);
};

sum(6, 8, printSum);
