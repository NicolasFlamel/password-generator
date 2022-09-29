// Assignment code here

function generatePassword() {
  var password;
  var pwConditions = conditions();

  //verify at least one condition was selected
  if(!Object.values(pwConditions).includes("yes")){
    alert("At least one of the following conditions must be selected: \n\u2022Include lowercase characters \n\u2022Include uppercase characters \n\u2022Include numberic characters \n\u2022Include special characters\nPlease try again");

    return null;
  }

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
  alert("Please choose you're password length between 8 and 128 characters" + "\nAt least one of the following conditions must be selected: \n\u2022Include lowercase characters \n\u2022Include uppercase characters \n\u2022Include numberic characters \n\u2022Include special characters");

  conditions.charLength = prompt("Please enter password length." + "\nMust be at least 8 characters and no more than 128 characters.");
  validateInput(conditions.charLength, 'number');

  //asks conditions then validates through another function before returning result
  conditions.lwr = validateInput(prompt("Inlcude lowercase characters?" + "\nYes or No").toLowerCase(), 'y/n');

  conditions.upper = validateInput(prompt("Inlcude uppercase characters?" + "\nYes or No").toLowerCase(), 'y/n');
 
  conditions.number = validateInput(prompt("Inlcude numeric characters?" + "\nYes or No").toLowerCase(), 'y/n');
  

  conditions.special = validateInput(prompt("Inlcude special characters?" + "\nYes or No").toLowerCase(), 'y/n');

  return conditions;
}

function validateInput(input, answer) {
  while(answer === 'number' && (input < 8 || input > 128)){
    input = prompt("Incorrect input!" + "\nPlease enter password length." + "\nMust be at least 8 characters and no more than 128 characters.");
    if(input == null)
      return;
  }

  while(answer === 'y/n' && (input != 'yes' && input != 'no')){
    input = prompt("Incorrect input!" + "\nPlease enter yes or no.").toLowerCase();
    if(input == null)
      return;
  }

  return input;
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
