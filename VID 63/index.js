console.log("JS ARRAYs VID 63.");

let arr = [1, 2, 4, 5, 7];
// console.log(arr);
// console.log(arr[0]); // Accessing the first element
// console.log(arr[1]); // Accessing the second element
// console.log(arr[2]); // Accessing the third element
// console.log(arr[3]); // Accessing the fourth element
// console.log(arr[4]); // Accessing the fifth element
// console.log(arr.length); // Getting the length of the array
// console.log(arr, typeof arr); // Logging the array and its type

arr[0] = 4646;

console.log(arr.toString()); // Converting array to string
console.log(arr.join(" and ")); // Joining array elements with a separator
arr.pop(); // Removing the last element
console.log(arr); // Logging the modified array

arr.push(100); // Adding a new element to the end
console.log(arr); // Logging the array after adding a new element
arr.push("Ahmar");
console.log(arr); // Logging the array after adding a string element
arr.shift(); // Removing the first element
console.log(arr); // Logging the array after removing the first element
arr.unshift(1000); // Adding a new element to the beginning
console.log(arr); // Logging the array after adding a new first element

let num = [1, 2, 3, 4, 5];
num.splice(2, 0, 100); // Inserting 100 at index 2
console.log(num); // Logging the array after insertion

//array.splice(start, deleteCount, item1, item2, ...) syntax of splice
