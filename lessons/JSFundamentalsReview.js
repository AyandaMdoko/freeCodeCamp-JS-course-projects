// Function to reverse a string
// function reverseString(str){
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("hello")); // "olleh"

// Function to check if a string is a palindrome
function largestOfAll(arr){
  let largest = [];

  for (let i = 0; i < arr.length; i++){
    largest.push(Math.max(...arr[i]));
  }
  return largest;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [5, 27, 39, 1001]

//function that returns the first element that passes a test function
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

// Example usage:
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); // undefined

//Slice and Splice Algorithm
function frankenSplice(arr1, arr2, n) {
  // Copy arr2 so the original isn't mutated
  const result = [...arr2];

  // Insert arr1's elements into the copy at index n
  result.splice(n, 0, ...arr1);

  return result;
}

// Example usage:
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4, 1, 2, 3, 5, 6]
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 4)); // [4, 5, 6, 1, 2, 3]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]


//pyramid generator
function pyramid(char, rows, inverted) {
  let lines = [];

  for (let i = 0; i < rows; i++) {
    const numChars = 2 * i + 1;
    const numSpaces = rows - 1 - i;
    lines.push(" ".repeat(numSpaces) + char.repeat(numChars));
  }

  if (inverted) {
    lines.reverse();
  }

  return "\n" + lines.join("\n") + "\n";
}

// Example usage:
console.log(pyramid("o", 4, false));