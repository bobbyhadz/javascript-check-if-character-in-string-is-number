// EXAMPLE 1 - Check if a Character in String is a Number with Regex

function isNumber(char) {
  return /^\d$/.test(char);
}

const str = 'a1';

console.log(isNumber(str[0])); // 👉️ false
console.log(isNumber(str[1])); // 👉️ true
console.log(isNumber('100')); // 👉️ false
console.log(isNumber('')); // 👉️ false
console.log(isNumber(undefined)); // false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Character in String is a Number using `isNaN()`

// function isNumber(char) {
//   if (typeof char !== 'string') {
//     return false;
//   }

//   if (char.trim() === '') {
//     return false;
//   }

//   return !isNaN(char);
// }

// const str = 'a1';
// console.log(isNumber(str[0])); // 👉️ false
// console.log(isNumber(str[1])); // 👉️ true
// console.log(isNumber('123')); // 👉️ true
// console.log(isNumber('')); // 👉️ false
// console.log(isNumber(undefined)); // false
