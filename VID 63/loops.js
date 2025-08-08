let a = [1, 2, 3, 4, 5];

// Classic loop for Arrays
/* for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
    */

// forEach loop for Arrays
/*
a.forEach((value, index, arr) =>{
    console.log(value, index, arr);
})

*/

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (const key in obj) {
//     console.log(key, obj[key]);
// }   

for (const iterator of a) {
    console.log(iterator);
}