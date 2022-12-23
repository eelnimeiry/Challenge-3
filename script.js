// Assignment code here
function getLength(){
  console.log("Getting length")
  var length = prompt("WHat length would you like?")
  if(length >=8 && length <= 128){
    return length
  }
  alert("You must enter a number between 8 and 128")
  return getLength()
}

function getCriteria(){
  var characters = ""
  var lowercase = "asdbgsdj"
  var upperLetters = "ASLKJGKALSJDF"
  var numbers = "12342345"
  var special = "!@&%^*#$@"
  //ASK IF THEY WANT OLWERCASE, UPPERCASE, NUMBERS, SPECIAL
  //IF THEY DOMException, WE'LL MODIFY OUR CHRACTERS VARIABLE


  //CHECK IF THEY SELECTED AT LEAST ONE TYPE OF VARIABLE

  //IF THEY DID, WE'LL RETURN characters

  //if they didn't return getCriteria()

  return characters
}

function generatePassword(){
  //get certain characters
  //ask if they want certain characters
  // Ask for the password length
  var passwordLength = getLength()
  console.log(passwordLength)

  var passwordBase = getCriteria()

  console.log("HELlo")
  //Ask for confirmation of which characters to use


  var finalPassword = ""


  return finalPassword
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
