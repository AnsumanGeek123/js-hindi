// Dates

let myDate = new Date();
console.log(typeof myDate); // Object as new keyword
console.log(myDate.toString()); // Sat Jul 06 2024 14:58:47 GMT+0530 (India Standard Time
console.log(myDate.getDate()); // Gives only date
console.log(myDate.toDateString());  //sat jul 06 2024
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(Date.now()/1000); // This now is used as comapre between 
console.log(myDate.getMonth());  queueMicrotask