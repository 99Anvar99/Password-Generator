const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

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

const invalid_messages_array = [
  "Password length must be at least 8 characters",
  "Maximum characters allowed is 128",
  "Please select one or multiple checkboxes to generate a password",
  "No password to copy",
  "Your Secure Password",
];

function copyPassword() {
  const passwordValue = passwordInput.value;
  if (passwordValue === "" || invalid_messages_array.includes(passwordValue)) {
    passwordInput.value = "No password to copy";
    return;
  }
  passwordInput.select();
  document.execCommand("copy");
  passwordInput.value = "Password Copied: " + passwordValue;
  setTimeout(() => {
    passwordInput.value = passwordValue;
  }, 3000);
}