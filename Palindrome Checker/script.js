const checkButton = document.getElementById("check-btn");
const text = document.getElementById("text-input");
const output = document.getElementById("check");
const result = document.getElementById("result");

function checkPalindrome(text) {
  if (text === "") {
    alert("Please input a value");
  } else {
    const reverseText = reverseString(text);
    if (reverseText === text) {
      result.innerHTML = generateOutput(text, true);
    } else {
      result.innerHTML = generateOutput(text, false);
    }
  }
}

function generateOutput(text, isPalindrome) {
  if (isPalindrome) {
    return `${text} is a palindrome`;
  } else {
    return `${text} is not a palindrome`;
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

checkButton.addEventListener("click", () => {
  checkPalindrome(text.value);
});
