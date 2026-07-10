// for (variable of iterable) {
//   // code block to be executed
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}