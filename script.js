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

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){ 

  uppercaseCheck = confirm("Do you want to include uppercase letters in your password? (Y/N)");

// uppercaseCheck = uppercaseCheck.toLowerCase(); 
// if (uppercaseCheck === null || uppercaseCheck === ""){ 
// alert("Please answer Y or N"); // determineUppercase(); 
// }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){ 
// uppercaseCheck = true; 
// return uppercaseCheck; 
// }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){ 
// uppercaseCheck = false; // return uppercaseCheck; 
// }else { 
// alert("Please answer Y or N");
// determineUppercase(); 
// }

if (uppercaseCheck){ 
characters+=lowercaseChar; 
}
return uppercaseCheck;
} 

//Function used to determine whether the user wants to include numbers in the password 
function determineNumbers(){ 
  numberCheck = confirm("Do you want to include numbers in your password? (Y/N)"); 
  // numberCheck = numberCheck.toLowerCase(); 
  // if (numberCheck === null || numberCheck === ""){ 
    // alert("Please answer Y or N"); 
    // determineNumbers(); 
    // }else if (numberCheck === "yes" || numberCheck ==="y"){ 
      // numberCheck = true; 
      // return numberCheck; 
      // }else if (numberCheck === "no" || numberCheck ==="n"){ 
        // numberCheck = false; 
        // return numberCheck; 
        // }else { 
          // alert("Please answer Y or N"); 
          // determineNumbers(); 
          // } 
          if (numberCheck){ characters+=numberschar; 
        } return numberCheck; 
}