// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Max Character set 128
  var max_character_length = 128;

  // Get user inputs
  var length = document.getElementById("length").value;
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;

  // Check if the input length is not below 8
  if (length < 8) {
    document.getElementById("password").value = "Password length must be at least 8 characters";
    return;
  }

  // Check if the input length is greater than the maximum allowed
  if (length > max_character_length) {
    document.getElementById("password").value = "Maximum characters allowed is 128";
    return;
  }

  // Check if any checkboxes are checked
  if (!(uppercase || lowercase || numbers || symbols)) {
    document.getElementById("password").value = "Please select one or multiple checkboxes to generate password";
    return;
  }

  // Define character sets
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Build character set based on user inputs
  var charset = "";
  if (uppercase) {
    charset += uppercaseChars;
  }
  if (lowercase) {
    charset += lowercaseChars;
  }
  if (numbers) {
    charset += numberChars;
  }
  if (symbols) {
    charset += symbolChars;
  }

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Display password
  document.getElementById("password").value = password;
}