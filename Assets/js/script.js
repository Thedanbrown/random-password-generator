
var generateBtn = document.querySelector("#generate");
// This Func makes the y/n input lowercase to keep consistency in the code
function askYN (title) {
  let result = '';
  while (result != 'y' && result != 'n') {
    result = prompt(title).toLowerCase();
  }
  return result;
}
// This contains the strings of allowable content for the generated password
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}
// this function generates the pass word based on user input criteria
function generatePassword () {
  let charLength = 0;
  while (charLength < 8 || charLength > 128 || Number.isNaN(charLength)) {
    charLength = parseInt(prompt("Please choose between 8 to 128 characters for password length"));
    console.log(charLength);
  }
  
  let lowercase = '';
  let uppercase = '';
  let number = '';
  let specialChar = '';

  let atLeastOneCharType = false;
  //this function will make sure to prompt them to say yes to at least one parameter before a password will be generated
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
      alert("Please Enter y for at least one parameter!")
    }
  }

  var values = [];
//these if statements will build an array from the chosen variables if y is chosen as a parameter
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
//this for statement will generate the password as a string based on variables added to the values array and chosen length
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
// this event listener will generate the password when the generate button is clicked
generateBtn.addEventListener("click", writePassword);
