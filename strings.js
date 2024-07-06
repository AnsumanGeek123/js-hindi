let str = "hello world";
console.log(str[0]);
console.log(typeof str);
let str1 = new String("ansuman");
console.log(str1.__proto__);
console.log(typeof str1); 

console.log(str1.length);
console.log(str.toUpperCase());
console.log(str);
console.log(str.substring(2,4));

console.log(str.trim()); // All white spaces has to be removed
console.log(str.trimStart());
console.log(str.trimEnd());

//Suppose we need to replace something

const url = "https://ansuman.com/ansuman%20das";
console.log(url.replace('%20','_'));


// Converting any string to Array
const array = str.split(' ');
console.log(array);