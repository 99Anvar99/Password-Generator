const generateBtn = document.querySelector("#generate");
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  const maxCharacterLength = 128;

  const length = lengthInput.value;
  const uppercase = uppercaseCheckbox.checked;
  const lowercase = lowercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const symbols = symbolsCheckbox.checked;

  if (length < 8) {
    passwordInput.value = "Password length must be at least 8 characters";
    return;
  }

  if (length > maxCharacterLength) {
    passwordInput.value = `Maximum characters allowed is ${maxCharacterLength}`;
    return;
  }

  if (!(uppercase || lowercase || numbers || symbols)) {
    passwordInput.value = "Please select one or multiple checkboxes to generate a password";
    return;
  }

  const charSets = [
    uppercase && "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase && "abcdefghijklmnopqrstuvwxyz",
    numbers && "0123456789",
    symbols && "!@#$%^&*()_+~`|}{[]\\:;?><,./-=",
  ].filter(Boolean);

  const charset = charSets.join("");

  passwordInput.value = generatePassword(charset, length);
}

function generatePassword(charset, length) {
  const passwordArray = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomIndex(charset.length);
    passwordArray.push(charset[randomIndex]);
  }
  return passwordArray.join("");
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}