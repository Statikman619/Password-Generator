//Special character options for what you choose.
var passwordlengthoption = "Must be 8 characters no more than 128"
var lowercaseoption = "abcdefghijklmnopqrstuvwxyz"
var uppercaseoption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersoption = "0123456789"
var specialcharactersoption = "~!@#$%^&*()-_+="


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  
  passwordText.value = password;
  
}
function randomize(str) {
  var index = Math.floor(Math.random() * str.length)
  var char = str[index]
  return char
}
//Prompt that asks how many characters and certain lengths.
function generatePassword() {
  var passwordlength = window.prompt("How many characters do you want your password to be?")
  passwordlength = parseInt(passwordlength)
  if (passwordlength <8 || passwordlength >128) {
    window.alert("Password must be between 8 and 128 characters")
    return;
  }
  // Prompts that ask what characters you would like in your password.
  var lowercase = window.confirm("Do you want lower case letters?")
  var uppercase = window.confirm("Do you want upper case letters?")
  var numbers = window.confirm("Do you want your numbers?")
  var specialcharacters = window.confirm("Do you want special characters?")
// is user clicks 'cancel' it will give you 'false' if you put 'ok' it will give you 'true'
  if (!lowercase && !uppercase && !numbers && !specialcharacters){
    return "false"
  }
  var finalstring= ""
  if (lowercase){
    finalstring= finalstring + lowercaseoption  
  }

  if (uppercase){
    finalstring= finalstring + uppercaseoption
  }

  if (numbers){
    finalstring= finalstring + numbersoption
  }

  if (specialcharacters) {
    finalstring= finalstring + specialcharactersoption
  }
  var password = ""
  for(i=0; i< parseInt(passwordlength); i++){
    var single= randomize(finalstring)
    password= password + single
  }
  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);