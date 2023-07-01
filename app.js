console.log("Hello World!\n==========\n");

// Exercise 1 Section

function  plus(num) {
return function (plusNumber) {
  return num + plusNumber;
  }
}
const plus2 = plus(2);

console.log(plus2(2)); 
console.log(plus2(5));

const plus100 = plus(100);

console.log(plus100(100)); 
console.log(plus100(5));

//Exercise 2 Section

