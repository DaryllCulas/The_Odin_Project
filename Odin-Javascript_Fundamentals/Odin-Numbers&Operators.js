const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

console.log(typeof myInt); // number
console.log(typeof myFloat); // number


const lotsOfDecimal = 1.786465451696164464;
console.log(lotsOfDecimal); //1.7864654516961644


const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces); // 1.79



let myNumber1 = "74";
myNumber1+=3; // 743
console.log(myNumber1);

 let myNumber = "74";
 myNumber = Number(myNumber) + 3;

 console.log(myNumber); // 77


 /*** OPERATORS *****/
const num1 = 10;
const num2 = 50;

console.log(9 * num1); // 90
console.log(num1 ** 3); // 1000
console.log(num2 * num1); // 500


console.log(5 + 10 * 3); // 35
console.log(num2 % 9 * num1); // 50
console.log(num2 + num1 / 8+2); // 53.25

let x = 3;
let y = 4;

console.log(x += y); //   7
console.log(x -= y); // 3
console.log(x *= y); // 12
console.log(x /= y); // 3



