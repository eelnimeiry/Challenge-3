// Assignment code here
var generateBtn = document.querySelector("#generate"); 
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
 var uppercaseCharacter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 var numberschar ="12345678910"; 
 var symbolsChar = "^!?@#$%&*+(){}[]-<>~:;.,|"; 
 var passwordLength; var uppercaseCheck; var numberCheck; 
 var specialCheck; var characters = ""; 
 
 //fucntion used to determine the length of the password
 function determineLength() { 
  passwordLength = prompt("choose how many chaaracters long you'd like your password to be (between 8-128 characters): ");
  if (passwordLength<8){ 
   alert("password length must be a number between 8-128 characters"); 
   determineLength(); 
  }else if (passwordLength>128){
     alert("Password length must be a number between 8-128 characters");
      determineLength();
     }else if (isNaN(passwordLength)){ 
      alert("Password length must be a number between 8-128 characters"); 
      determineLength(); 
    }else{ alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'N' for all, your password will only contain lowercase letters."); } 
    return passwordLength; 
  }


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

e18f095 ("updated criteria")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
