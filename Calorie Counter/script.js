const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputString(str) {
  /* Specified the escape operators
    \s -> escape white spaces
    g  -> a flag, it'll keep looking until the end
  */
  const regex = /[+-\s]/g;

  //Replace characters(regex) with ""
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  /* Specified the escape operators
    e -> exponential
    i -> pattern case-insensitive. Eg -> hello, Hello, HELLO, and even hElLo
    \d -> match any digit

  */
  const regex = /\d+e\d+/i;

  return str.match(regex);
}

function addEntry() {
  const targetId = "#" + entryDropdown.value;
}
