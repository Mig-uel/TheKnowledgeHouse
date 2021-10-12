function palindrome() {
  let userInput = document.getElementById("field").value;
  let reversedUserInput = userInput.split("");
  reversedUserInput.reverse();
  let reversed = reversedUserInput.join("");

  if (userInput === reversed) {
    alert(`${userInput} is a palindrome -> ${reversed}`);
  }
  else {
    alert(`${userInput} is not a palindrome -> ${reversed}`)
  }
}
