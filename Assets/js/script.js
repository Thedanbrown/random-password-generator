// Assignment Code
var generateBtn = document.querySelector("#generate");

function askYN (title) {
  let result = '';
  while (result != 'y' && result != 'n') {
    result = prompt(title).toLowerCase();
  }
  return result;
}

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

function generatePassword () {
  let charLength = 0;
  while (charLength < 8 || charLength > 128 || Number.isNaN(charLength)) {
    charLength = parseInt(prompt("8 to 128 characters"));
    console.log(charLength);
  }
  
  let lowercase = '';
  let uppercase = '';
  let number = '';
  let specialChar = '';

  let atLeastOneCharType = false;
  while (!atLeastOneCharType) {
    lowercase = askYN("Lowercase: Y/N");
    if (lowercase === 'y') {
      atLeastOneCharType = true;
    }
    console.log(lowercase);
    uppercase = askYN("Uppercase: Y/N");
    if (uppercase === 'y') {
      atLeastOneCharType = true;
    }
    console.log(uppercase);
    number = askYN("Numbers: Y/N");
    if (number === 'y') {
      atLeastOneCharType = true;
    }
    console.log(number);
    specialChar = askYN("Special Characters: Y/N");
    if (specialChar === 'y') {
      atLeastOneCharType = true;
    }
    console.log(specialChar);
    if (atLeastOneCharType === false) {
      alert("Please Enter y for one parameter!")
    }
  }

  var values = [];

  if (lowercase === "y") {
    values = values.concat(keys.lowerCase.split(''))
  }

  if (uppercase === "y") {
    values = values.concat(keys.upperCase.split(''))
  }
  
  if (number === "y") {
    values = values.concat(keys.number.split(''))
  }
  
  if (specialChar === "y") {
    values = values.concat(keys.symbol.split(''))
  }

  var password = "";

  for (i = 0; i < charLength; i++) {
    let index = Math.floor(Math.random() * (values.length - 1));
    password = password.concat(values[index]);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
