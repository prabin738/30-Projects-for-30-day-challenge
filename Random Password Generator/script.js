const passwordBox = document.getElementById("password");
const myBtn = document.querySelector("button");
const CopyPsd = document.getElementById("copy");
const length = 12; //Password length you can add custom length
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!#$%^&*()-=";

const allChars = upperCase + lowerCase + number + symbol;

//function to create password
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
//Eventlistner to track click on generate password
myBtn.addEventListener("click", createPassword);

//function to copy password
function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
}

CopyPsd.addEventListener("click", copyPassword);
