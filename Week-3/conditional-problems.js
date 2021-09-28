// Part A
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let temp = lunchArray[0];
let longest = lunchArray[0].length;

for(let i = 1; i < lunchArray.length; i++) {
  if(longest < lunchArray[i].length) {
    temp = lunchArray[i]
    longest = lunchArray[i].length;
  }
  else {
    temp = temp;
  }
}
console.log(`The longest word in the array is ${temp} and it is ${longest} words long!`)

//Part B
// Write a function that returns elements on odd positions in a list.

// Part C
function factorial(n) {
  var fac = 1;

  while(n != 0) {
    fac *= n;
    n--;
  }
  return fac;
}
console.log(`The factorial of 5 is ${factorial(5)}`);

// Part D
let mpg = 120;

if (mpg >= 120) {
  console.log("If you are using the Tom Ogle fuel system, props!")
}
else if (mpg > 35) {
  console.log("The fish of the sea smile at your conservation!")
}
else if (mpg > 29) {
  console.log("Not many gas stops will be taken!")
}
else if (mpg > 20) {
  console.log("Atmosphere smiles at your decision!")
}
else if (mpg > 16) {
  console.log("It's palpable!")
}
else if (mpg > 10) {
  console.log("Planet still frowns upon this, and so does your wallet!")
}
else if (mpg <= 10) {
  console.log("Gas guzzler!");
}
