const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
};

const exampleObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
  occupation: "Software Developer",}
  ;
  
// Dot notation
// console.log(exampleObject.name);
// console.log(exampleObject.age);
// console.log(exampleObject.city);
// console.log(exampleObject.occupation);

// Bracket notation
// console.log(exampleObject["name"]);
// console.log(exampleObject["age"]);
// console.log(exampleObject["city"]);
// console.log(exampleObject["occupation"]);


// const person = {
//   name: "Alice",
//   age: 30,
//   job: "Engineer"
// };

// delete person.job;

// console.log(person.job); // undefined


// let obj = {a: 1, b: 2, c: 3};
// delete obj.b;
// console.log(obj);

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// delete car.year;
// console.log(car.year);

// const person = {
//   name: "Alice",
//   age: 30
// };

// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("job")); // false


// const person = {
//   name: "Alice",
//   age: 30
// };

// console.log(Object.hasOwn(person, "name")); // true
// console.log(Object.hasOwn(person, "job")); // false


// const user = {
//   username: "coder123",
//   score: 0,
//   isActive: false,
//   nickname: null
// };

// // Object.hasOwn() correctly reports these all exist
// console.log(Object.hasOwn(user, "score"));    // true  (value is 0, but property exists)
// console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
// console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
// console.log(Object.hasOwn(user, "email"));   // false (property was never added)

// // Danger! Using if() directly gives wrong results for falsy values
// if (user.score) {
//   console.log("Has score"); // This will NOT print even though score exists!
// }

// // Safe! Object.hasOwn() gives correct result
// if (Object.hasOwn(user, "score")) {
//   console.log("Has score:", user.score); // Has score: 0
// }


// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// console.log(car.brand !== undefined); // true
// console.log(car.color !== undefined); // false

// let num1 = 5;
// let num2 = num1;
// num1 = 10;

// console.log(num2); // 5

// const originalPerson = { name: "John", age: 30 };
// const copiedPerson = originalPerson;

// originalPerson.age = 31;

// console.log(copiedPerson.name); // "John"
// console.log(copiedPerson.age); // 31

// const person = {
//     name: "Bob",
//     age: 30,
//     sayHello: function() {
//         return "Hello, my name is " + this.name;
//     }
// };

// console.log(person.sayHello()); // "Hello, my name is Bob"

// function sayHello() {
//     return "Hello!";
// }

// let obj = {
//     sayHello: function() {
//         return "Hi there!";
//     }
// };

// console.log(sayHello());
// console.log(obj.sayHello());

// const num = 42;
// const numObj = Object(num); // Creates an object wrapper for the number

// console.log(numObj);
// console.log(typeof numObj); // "object"



function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));

//In this example, we have a function called toObject.
// The second condition will check if the value is a type of object and will return the value if the condition is true. 
// This condition will check for objects as well as arrays since arrays are special types of objects.
// If neither of the conditions is true, the function returns Object(value), which converts the input into an object. 
// This works for values like numbers, strings, and booleans.
// Most of the time you will not be using the Object() constructor to create new objects because you will be using object literal syntax instead (e.g., const objectLiteral = { name: "Beau" }). 
// But it is still good to understand the basics of working with the Object constructor.
