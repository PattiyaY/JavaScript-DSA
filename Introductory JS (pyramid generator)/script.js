//String
let character = "Hello";

//Number
let count = 8;

//Array
let rows = ["Naomi", "Quincy", "CamperChan"];

//Update value dynamically access the last element
rows[rows.length - 1] = 10;

//Add the string "freeCodeCamp" to array
let pushed = rows.push("freeCodeCamp");
console.log(pushed);

//Removes the last element from an array
let popped = rows.pop();

console.log(popped);
console.log(rows);
