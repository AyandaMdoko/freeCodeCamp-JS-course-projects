// let str = "JavaScript";
// let objStr = new String("JavaScript");
// console.log(str.length === objStr.length);

// const num = 10;
// console.log(num.toString(2)); // "1010"

// const person = {
//   name: "John",
//   age: 30,
//   isStudent: true
// };

// console.log(person.toString()); // "[object Object]"

// let num = 5.7;
// console.log(num.toString());

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

// let obj = { name: "John", age: 30 };
// console.log(obj.toString());

// const boolTrue = Number(1);
// const boolFalse = Number(0);

// console.log(boolTrue);
// console.log(boolFalse);

// const emptyArr = Number([]);
// const arrOneNum = Number([7]);
// const arrMultiNum = Number([7, 36, 12]);
// const arrStr = Number(["str1"]);
// const arrMultiStr = Number(["str1", "str2"]);

// console.log(emptyArr); // 0
// console.log(arrOneNum); // 7
// console.log(arrMultiNum); // NaN
// console.log(arrStr); // NaN
// console.log(arrMultiStr); // NaN

// const emptyArray = new Array(5);
// console.log(emptyArray.length); // 5
// console.log(emptyArray); // [ , , , , ]

// const fixedLengthArray = Array.from({ length: 5 });
// console.log(fixedLengthArray.length); // 5
// console.log(fixedLengthArray); // [undefined, undefined, undefined, undefined, undefined]

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

function outer(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = outer(5);
console.log(add5(3));