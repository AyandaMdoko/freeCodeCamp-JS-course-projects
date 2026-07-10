// let singleQuotes = 'This is a string';
// console.log(singleQuotes);
// let doubleQuotes = "This is also a string";
// console.log(doubleQuotes);

// const name = "Alice";
// const greeting = `Hello, ${name}!`;

// console.log(greeting);


// const name = "Alice";
// const age = 25;
// const message = `My name is ${name} and I am ${age} years old.`;
// console.log(message);


// let sentence = "JavaScript is awesome, and JavaScript is powerful!";
// let position = sentence.indexOf("JavaScript", 10);
// console.log(position); // 27


// const btn = document.getElementById("prompt-btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//   const userName = prompt("What is your name?", "Guest");
//   output.textContent = "Hello, " + userName + "!";
// });

// let letter = "Ayanda";
// console.log(letter.charCodeAt(3));  // 65

// let char = String.fromCharCode(66);
// console.log(char);  //  A

// let phrase = "JavaScript is awesome!";
// let result = phrase.includes("awesome");

// console.log(result);  // true

// let message = "Hello, world!";
// let greeting = message.slice(0, 5);

// console.log(greeting);  // Hello

// const organization = "freeCodeCamp";
// console.log(organization.indexOf("c"));

// let a = 5;  // Binary: 101
// let b = 3;  // Binary: 011
// console.log(a & b);  // 1 (Binary: 001)

// let x = 8;
// console.log(x << 2);  // 32 (Binary: 100000)

// if (null) {
//   console.log("This will not run.");
// }

// if ("freeCodeCamp") {
//   console.log("This will run.");
// }

// const age = 15;

// if (age >= 18) {
//  console.log("You're eligible to vote"); // You're eligible to vote
// } else {
//  console.log("You're not eligible to vote"); // You're not eligible to vote
// }


// const score = 60;

// if (score >= 90) {
//  console.log('You got an A'); 
// } else if (score >= 80) {
//  console.log('You got a B'); // You got a B
// } else if (score >= 70) {
//  console.log('You got a C');
// } else {
//  console.log('You failed! You need to study more!');
// }

// const result = true && 'hello';

// console.log(result); // hello

// if (2 < 3 && 3 < 4) {
//  console.log('The if block runs'); 
// } else {
//  console.log('The else block runs');
// } 


// let userInput;

// if (userInput || 'Guest') {
//  console.log('A user is present');
// } else {
//  console.log('No user detected');
// }

// const userSettings = {
//  theme: null,
//  volume: 0,
//  notifications: false,
// };

// let theme = userSettings.theme ?? 'light';
// console.log(theme); // light

// const randomNum = Math.random();

// console.log(randomNum);
// // any number between 0 and 1 – 0 inclusive and 1 exclusive

// const smallest = Math.min(1, 5, 3, 9);
// console.log(smallest); // 1

// const largest = Math.max(1, 5, 3, 9);
// console.log(largest); // 9

// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.5)); // 5

// const max = 10;
// const min = 5;
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

let num1 = 12.345;
let num2 = 67.891;

console.log((num1 + num2).toFixed(2));