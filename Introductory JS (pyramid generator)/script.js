//can be reassigned
//String
let character_eg = "Hello";

//Number
let count_eg = 8;

//Array
let rows_eg = ["Naomi", "Quincy", "CamperChan"];

//Update value dynamically access the last element
rows_eg[rows_eg.length - 1] = 10;

//Add the string "freeCodeCamp" to array
let pushed = rows_eg.push("freeCodeCamp");
console.log(pushed);

//Removes the last element from an array
let popped = rows_eg.pop();

console.log(popped);
console.log(rows_eg);

//Can't be reassigned
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result);

//Upside down pyramid
/* for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
} */

/* for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
} */

/* 
const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
*/
