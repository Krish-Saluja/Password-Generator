function pwd(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let answer = document.getElementById("password-generated");
  answer.value = result;
  return result;
}
let btn1 = document.getElementById("btn");
btn1.addEventListener("click", () => {
  console.log("all g here");
  console.log(document.getElementById("trueValue").value);
  let realValue = document.getElementById("trueValue").value;
  console.log(pwd(realValue));
});

let copy = document.getElementById("copy-password");
copy.addEventListener("click", () => {
  let valueToCopy = document.getElementById("password-generated").value;
  navigator.clipboard
    .writeText(valueToCopy)
    .then(() => {
      alert("Copied to Clipboard!");
    })
    .catch((err) => {
      console.log("Failed" + err);
    });
});
