// Assignment code here

function generatePassword() {
  var password;
  var tempConditions = conditions();

  return password;
}

function conditions() {
  var conditions = {
    charLength: 8,  // character length for pw
    lwr: 'no',      // lowercase
    upper: 'no',    // uppercase
    number: 'no',   // number
    special: 'no'   // speical
  };

  //prompts to ask user their conditions 
  conditions.charLength = prompt("Please enter password length." + "\nMust be at least 8 characters and no more than 128 characters.");
  conditions.lwr = prompt("Inlcude lowercase characters?" + "\nYes or No").toLowerCase();
  conditions.upper = prompt("Inlcude uppercase characters?" + "\nYes or No").toLowerCase();
  conditions.number = prompt("Inlcude numeric characters?" + "\nYes or No").toLowerCase();
  conditions.special = prompt("Inlcude special characters?" + "\nYes or No").toLowerCase();

  return conditions;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
