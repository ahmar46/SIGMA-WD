let arr = [1, 13, 7, 7, 11];
// let newArr = [];

/*for(let index=0; index<arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2);
}*/
// console.log(newArr); // Output: [1, 169, 49, 49, 121]

let newArr = arr.map((e, inddex, array) => {
    return e ** 2;
})

console.log(newArr); // Output: [1, 169, 49, 49, 121]

