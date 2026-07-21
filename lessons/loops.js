// for loops

// for (variable of iterable) {
//   // code block to be executed
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }


// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 40 }
// ];

// for (const person of people) {
//   console.log(`${person.name} is ${person.age} years old`);
// }

// const fruits = ['apple', 'banana', 'cherry'];

// for (let fruit of fruits) {
//   console.log(fruit.toUpperCase());
// }

// const fruit = {
//   name: 'apple',
//   color: 'red',
//   price: 0.99
// };

// for (const prop in fruit) {
//   console.log(fruit[prop]);
// }

// const person = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   }
// };

// for (const prop in person) {
//   console.log(person[prop]);
// }

// const person = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   }
// };

// function isObject(obj) {
//   return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
// }

// for (const prop in person) {
//   if (isObject(person[prop])) {
//     for (const nestedProp in person[prop]) {
//       console.log(person[prop][nestedProp]);
//     }
//   } else {
//     console.log(person[prop]);
//   }
// }

// while loops

// let counter = 0;
// while(counter < 5) {
//   console.log(counter);
//   counter++;
// }

//do while loops

// let counter = 0;
// do {
//   console.log(counter);
//   counter++;
// } while (counter < 10); 

//break and continue statements

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // skip the rest of the loop when i is 5
//   }
//   console.log(i);
// }


// swap elements without mutating the original

//Here is an example:

const originalArray = [12, 97, 68, 55];
const copyArray = originalArray.slice();
copyArray[1] = copyArray.splice(3, 1, copyArray[1])[0];
console.log(copyArray); // [12, 55, 68, 97]

//sorting an array using bubble sort algorithm

//EXAMPLE:
// Outer loop: controls how many passes we make
for (let i = 0; i < crew.length - 1; i++) {
  // Inner loop: compares neighboring items
  for (let j = 0; j < crew.length - 1 - i; j++) {
    // If current member has lower priority than next, swap
    if (crew[j].priority < crew[j + 1].priority) {
      // Using a temp variable for the swap
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
    }
  }
}

