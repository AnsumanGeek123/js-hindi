 const score = 400;
 console.log(score);
 let balance = new Number(100);
 console.log(typeof balance);

 // To convert into the strings
 console.log(balance.toString());
 let str = balance.toString();
 console.log(typeof str);
 balance = 200;
 console.log(typeof balance);

 // To Fix the value upto 2 decimal places
 console.log(balance.toFixed(2));
 // OP will be 200 -> 200.00

 const randomNumber = 100.84;
 console.log(randomNumber.toPrecision(3));
// toPrecision basically roundoff the the value.

// Sometimes it becomes hard for us to study a number
let num = 10000000;
// So we convert it to the standard readable form
console.log(num.toLocaleString('en-IN'));

