const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();

/* .getMonth() method returns a number between 0 and 11
    you need to add 1 to it to get the expected month number.
*/
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

/* formatted Date*/
const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;

    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;

    default:
      currentDateParagraph.textContent = formattedDate;
      break;
  }
});

//learn how to work on split() join() and reverse() method.
const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
console.log(exampleSentence);
