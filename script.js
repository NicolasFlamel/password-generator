// Assignment code here

function generatePassword() {
  var password = '';
  var pwConditions = conditions();

  //verify at least one condition was selected
  if(!Object.values(pwConditions).includes("yes")){
    alert("At least one of the following conditions must be selected: \n\u2022Include lowercase characters \n\u2022Include uppercase characters \n\u2022Include numberic characters \n\u2022Include special characters\nPlease try again");

    return null;
  }

  for(var i = 0; i < pwConditions.charLength; i++){
    password = password + characterGeneration(pwConditions);
  }

  return password;
}

//generates random character depending on user conditions
function characterGeneration(pwConditions){
  //make them into arrays
  var char = []; //array of character choices
  var lwrList = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numberList = '0123456789'.split('');
  var specialList = '!#"$%&\u0027()*+,-./:;<=>?@[\]^_`{|}~'.split('');

  if(pwConditions.lwr == 'yes')
    char.push(lwrList[Math.floor(Math.random() * lwrList.length)]);

  if(pwConditions.upper == 'yes')
    char.push(upperList[Math.floor(Math.random() * upperList.length)]);

  if(pwConditions.number == 'yes')
    char.push(numberList[Math.floor(Math.random() * numberList.length)]);

  if(pwConditions.special == 'yes')
    char.push(specialList[Math.floor(Math.random() * specialList.length)]);

  //randomly pick from multiple options if selected
  char[Math.floor(Math.random() * char.length)]

  return char[Math.floor(Math.random() * char.length)];
}

//asks user for pw conditions
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

   //asks conditions then validates through another function before returning result
  conditions.charLength = validateInput(prompt("Please enter password length." + "\nMust be at least 8 characters and no more than 128 characters."), 'number');

  conditions.lwr = validateInput(prompt("Inlcude lowercase characters?" + "\nYes or No").toLowerCase(), 'y/n');

  conditions.upper = validateInput(prompt("Inlcude uppercase characters?" + "\nYes or No").toLowerCase(), 'y/n');
 
  conditions.number = validateInput(prompt("Inlcude numeric characters?" + "\nYes or No").toLowerCase(), 'y/n');

  conditions.special = validateInput(prompt("Inlcude special characters?" + "\nYes or No").toLowerCase(), 'y/n');

  return conditions;
}

function validateInput(input, answer) {
  while(answer === 'number' && !(input >= 8 && input <= 128)){
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
