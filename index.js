let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "0123456789"
  const syimbol = "+×÷=/_!@#$%^&*()-':;,?,.{}~€£¥₩"
  
  const data = lowerAlphabet+upperAlphabet+numeric+syimbol
  let generator = '';
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value)
  password.value = newPassword
  alert("password has been generated!")
}

function savePassword() {
  
}