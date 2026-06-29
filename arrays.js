// const fruits = ["apple", "banana"];
// const newLength = fruits.push("orange");
// console.log(newLength); // 3
// console.log(fruits); // ["apple", "banana", "orange"]

// let fruits = ["apple", "banana", "orange"];
// let lastFruit = fruits.pop();
// console.log(fruits); // ["apple", "banana"]
// console.log(lastFruit); // "orange"

// let numbers = [2, 3];
// let newLength = numbers.unshift(1);
// console.log(numbers); // [1, 2, 3]
// console.log(newLength); // 3

// let chessboard = [
//     ["R", "N", "B", "Q", "K", "B", "N", "R"],
//     ["P", "P", "P", "P", "P", "P", "P", "P"],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     ["p", "p", "p", "p", "p", "p", "p", "p"],
//     ["r", "n", "b", "q", "k", "b", "n", "r"]
// ];

// console.log(chessboard[0][3]); // "Q"

// let fruits = ["apple", "banana", "orange"];

// let [first, second, third] = fruits;

// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(third);  // "orange"

// let numbers = [1, 2];
// let [a, b, c = 3] = numbers;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let [first, second, ...rest] = fruits;

// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(rest);   // ["orange", "mango", "kiwi"]

// let str = "hello";
// let charArray = str.split("");
// console.log(charArray); // ["h", "e", "l", "l", "o"]

// let fruits = ["apple", "banana", "orange", "banana"];
// let index = fruits.indexOf("banana");
// console.log(index); // 1

// let fruits = ["apple", "banana", "orange", "mango"];
// let indexToRemove = fruits.indexOf("orange");
// if (indexToRemove !== -1) {
//     fruits.splice(indexToRemove, 1);
// }

// console.log(fruits); // ["apple", "banana", "mango"]

// let fruits = ["apple", "banana", "orange", "mango"];
// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape"));  // false

// let numbers = [10, 20, 30, 40, 50, 30, 60];
// console.log(numbers.includes(30, 3)); // true
// console.log(numbers.includes(30, 4)); // true

// const originalArray = [1, 2, 3];
// const copyArray = [].concat(originalArray);

// console.log(copyArray); // [1, 2, 3]
// console.log(copyArray === originalArray); // false

// const originalArray = [1, 2, 3];
// const copyArray = originalArray.slice();

// console.log(copyArray); // [1, 2, 3]
// console.log(copyArray === originalArray); // false

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];

// console.log(copyArray); // [1, 2, 3]
// console.log(copyArray === originalArray); // false

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];

// copyArray.push(4);
// console.log(originalArray); // [1, 2, 3]
// console.log(copyArray);     // [1, 2, 3, 4]

// const arr1 = [1, 2, 3];
// const arr2 = arr1.slice();
// arr2.push(4);
// console.log(arr1, arr2);


// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); // [1, 2, 3, 4, 5]

// const colors = ["red", "blue", "green", "yellow"];
// colors.splice(1, 2, "purple");
// console.log(colors);

// const arr = ["apple", "banana", "cherry", "date"];
// const slicedArr = arr.slice(1, 3);
// console.log(slicedArr);

const fruits = ["apple", "banana", "cherry", "apple", "orange"];

fruits.splice(0, 1);

console.log(fruits);

const numbers = [1, 2, 3];
console.log(numbers[10]);