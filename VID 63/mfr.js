let arr = [1, 13, 7, 7, 11];
// let newArr = [];

/*for(let index=0; index<arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2);
}*/
// console.log(newArr); // Output: [1, 169, 49, 49, 121]

let newArr = arr.map((e, index, array) => {
    return e ** 2;
})

console.log(newArr); // Output: [1, 169, 49, 49, 121]
const greaterthanseven = (e) => {
    if(e>7) {
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanseven)); // Output: [13, 11]

let arr2 = [1,2,3,4,5,6];

const red = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(red)); // Output: 21 
