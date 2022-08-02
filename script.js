// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!", "”","#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}",, "~", "[","]", ]; 
var number = ["0","1","2","3","4","5","6","7","8","9"]

// Assignment code here
var getRandomLower= Math.floor(Math.random() * lowercase.length);
    console.log (getRandomLower,lowercase[getRandomLower]);
    //lowercase[getRandomLower] will exicute only once 
var getRandomUpper = Math.floor(Math.random() * uppercase.length);
    console.log (getRandomUpper,uppercase[getRandomUpper]);
var getRandomNumber = Math.floor(Math.random() * number.length);
    console.log (getRandomNumber,number[getRandomNumber]);
var getRandomSymbol = [Math.floor(Math.random() * special.length)];
    console.log (getRandomSymbol,special[getRandomSymbol]);



 

// // Write password to the #password input
function writePassword() {  
  characters = window.prompt ("How many characters would you like?");

  console.log(characters,typeof characters);

  var length = parseInt(characters);

  console.log(characters,typeof length);

  if (length < 8 || length > 128) {
    window.alert ("Must choose between 8 - 128."); 
    return writePassword();
  };
  lowercase = window.confirm ("Would you like to include lowercase?");
  uppercase = window.confirm ("Would you like to include upper case?");
  special = window.confirm ("Would you like to include a special character?");
  number = window.confirm ("Would you like to include a number?");
  for (var i=0; i < length; i++)   {
//if selected then include element that was selected
//if was selected go into array depends on amount of characters
//lowercase[getRandomLower]
  };
 
 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

  // click button then generated prompts for password criteria options
  var generatePassword = {
    getRandomLower,
    getRandomUpper,
    getRandomNumber,
    getRandomSymbol
  };

  
  
 