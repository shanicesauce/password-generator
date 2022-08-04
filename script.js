// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["\!", "\”","\#", "\$", "\%", "\&", "\’", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\^", "\{", "\|", "\}",, "\~", "\[","\]",]; 
var number = ["0","1","2","3","4","5","6","7","8","9"]
var choose = []

// Assignment code here


// // Write password to the #password input
 function writePassword(){  
  characters = window.prompt ("How many characters would you like?");

  console.log(characters,typeof characters);

  var length = parseInt(characters);

  console.log(characters,typeof length);

  while (length < 8 || length > 128 || Number.isNaN(length)) {
    window.alert ("Must choose between 8 - 128."); 
    length = parseInt (window.prompt ("How many characters would you like?"));

  };
  lowercaseConfirm = window.confirm ("Would you like to include lowercase?");
  uppercaseConfirm = window.confirm ("Would you like to include upper case?");
  specialConfirm = window.confirm ("Would you like to include a special character?");
  numberConfirm = window.confirm ("Would you like to include a number?");

  if (lowercaseConfirm === true) {
    choose = choose.concat (lowercase)
   }
   if (uppercaseConfirm === true) {
    choose = choose.concat(uppercase);
   }
   if (specialConfirm === true) {
    choose = choose.concat(special);
   }
   if (numberConfirm === true) {
    choose = choose.concat(number);}
  //if selected then include elements that was selected
//if was selected go into array depends on amount of characters
var password = ""
 for (var i=0; i < length; i++)   {


  password += choose[Math.floor(Math.random() * choose.length)];
 }
console.log(password);



  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

  // click button then generated prompts for password criteria options

  // passwordText.value = password;