const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incLowerCase = document.getElementById("lowercase");
const incUpperCase = document.getElementById("uppercase");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

generateBtn.addEventListener("click", () => {
    let characters = '';
    incLowerCase.checked ? (characters += lowerCase) : "";
    incUpperCase.checked ? (characters += upperCase) : "";
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    passwordTxt.innerText = generatePassword(length.value, characters);
    console.log(characters)
  });

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
   const textarea = document.createElement('textarea')
   const txt = passwordTxt.innerText;
   console.log(passwordTxt)
   if(txt == '') {
       return ''
    } else {
   textarea.value = txt ; 
   document.body.appendChild(textarea)
   textarea.select();
  document.execCommand("copy");
  textarea.remove()
  password.innerText = 'Password Copied !'

  setTimeout ( () => {
      password.innerText = ''
  }, 1000)
}
});
