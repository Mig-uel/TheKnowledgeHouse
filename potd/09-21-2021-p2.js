// PASTE THIS IN YOUR HTML FILE \\
/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <button onclick="addFruits()">Starbucks</button>
    <script src="script.js"></script>
  </body>
</html>
*/

// JS SECTION \\

let starbucks = []

function addFruits() {
  let userInput = prompt("Welcome to Starbucks! \nEnter a fruit: ");
  starbucks.push(userInput);
  console.log(starbucks)
}
