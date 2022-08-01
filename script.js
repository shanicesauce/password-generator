// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = document.querySelector("#length");
var upperEl = document.querySelector("#uppercase");
var lowerEl = document.querySelector("#lower");
var specialEl = document.querySelector("#special");
var numberEl = document.querySelector("#number");

// Assignment code here
var criteria= {
  lower : getRandomLower,
  upper : getRandomUpper,
  number : getRandomNumber,
  symbol : getRandomSymbol,
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
{
  
};
generatePassword (checkLower,checkNumb,checkSpec,checkUpper);
// click button then generated prompts for password criteria options
function getRandomLower(){
  var lowercase = ("abcdefghijklmnopqrstuvwxyz");
  return lowercase[Math.floor(Math.random() * lowercase.length)];

}

function getRandomUpper(){
  var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomNumber(){
  var number = ("0 1 2 3 4 5 6 7 8 9");
  return number[Math.floor(Math.random() * number.length)];
}
function getRandomSymbol(){
  var symbol = (" ! ” # $ % & ’ ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~");
  return symbol[Math.floor(Math.random() * symbol.length)];
}