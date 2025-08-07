console.log("JS STRINGS VID 60");

let a = "Hello";
console.log(a[0]); // H
console.log(a[1]); // e
console.log(a[2]); // l
console.log(a[3]); // l
console.log(a[4]); // o
console.log(a[5]); // undefined

console.log(a.length); // 5

let name1 = "Ahmar";
let name2 = "Jimi";
console.log("His name is " + name1 + " and his gf name is " + name2);
console.log(`His name is ${name1} and his gf name is ${name2}`); // Template literals

let b = "Jimi Sahin";
console.log(b.toUpperCase()); // JIMI SAHIN
console.log(b.toLowerCase()); // jimi sahin
console.log(b.indexOf("Sahin")); // 5
console.log(b.indexOf("Sahin") === -1); // false

console.log(b.length); // 10
console.log(b.slice(0, 6)); // Jimi
console.log(b.replace("Sahin", "Khan")); // Jimi Khan
console.log(b.concat(b, " Ahmar"));
console.log(b);
