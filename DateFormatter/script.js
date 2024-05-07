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
