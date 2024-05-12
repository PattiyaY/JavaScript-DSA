const checkButton = document.getElementById("check-btn");
const text = document.getElementById("text-input");
const output = document.getElementById("check");

checkButton.addEventListener("click", () => {
  if (text.value === "") {
    alert("Please input a value");
  }
});
