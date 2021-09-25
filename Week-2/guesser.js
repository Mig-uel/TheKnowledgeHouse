function letterGuesser() {
  let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let i = Math.floor(Math.random() * arr.length);
  i+=1;
  let letter = arr[i];

  let userInput = parseInt(prompt("You have received the letter " + letter + ". Guess the letter's index number: "));

  if(userInput === i) {
    alert("You are a genius at the alphabet!")
  }
  else {
    alert("You need to learn your ABC's! The correct answer was " + i + ". ")
  }
}
letterGuesser()
