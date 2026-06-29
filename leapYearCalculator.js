// variable outside the function
let year = 2024;

// function definition
function isLeapYear(y) {
  if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    return `${y} is a leap year.`;
  } else {
    return `${y} is not a leap year.`;
  }
}

// call the function and store result
let result = isLeapYear(year);

// output to console
console.log(result);