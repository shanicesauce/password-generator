// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["\!", "\”","\#", "\$", "\%", "\&", "\’", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\^", "\{", "\|", "\}",, "\~", "\[","\]",]; 
var number = ["0","1","2","3","4","5","6","7","8","9"]

// Assignment code here


// // Write password to the #password input
 function writePassword(){  
  characters = window.prompt ("How many characters would you like?");

  console.log(characters,typeof characters);

  var length = parseInt(characters);

  console.log(characters,typeof length);

  if (length < 8 || length > 128) {
    window.alert ("Must choose between 8 - 128."); 
    return writePassword();
  };
  lowercaseConfirm = window.confirm ("Would you like to include lowercase?");
  uppercaseConfirm = window.confirm ("Would you like to include upper case?");
  specialConfirm = window.confirm ("Would you like to include a special character?");
  numberConfirm = window.confirm ("Would you like to include a number?");
  //if selected then include elements that was selected
//if was selected go into array depends on amount of characters
var password = ""
 for (var i=0; i < length; i++)   {
if (lowercaseConfirm === true) {
 password += lowercase[Math.floor(Math.random() * lowercase.length)];
}
if (uppercaseConfirm === true) {
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
 }
 if (specialConfirm === true) {
  password += number[Math.floor(Math.random() * number.length)];
 }
 if (numberConfirm === true) {
  password += special[Math.floor(Math.random() * special.length)];
 }
console.log(password);


  }
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

  // click button then generated prompts for password criteria options

  // passwordText.value = password;