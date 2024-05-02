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
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

const call = padRow();
console.log(call);
