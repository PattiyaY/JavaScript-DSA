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
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );

  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>

  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" >
  
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>

  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" >
  `;

  targetInputContainer.insertAdjacentElement("beforeend", HTMLString);
}

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

addEntryButton.addEventListener("click", addEntry);
