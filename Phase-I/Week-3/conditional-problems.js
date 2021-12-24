// Part A
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let temp = lunchArray[0];
let longest = lunchArray[0].length;

for(let i = 1; i < lunchArray.length; i++) {
  if(longest < lunchArray[i].length) {
    temp = lunchArray[i];
    longest = lunchArray[i].length;
  }
  else {
    temp = temp;
  }
}
console.log(`Part A: The longest word in the array is ${temp} and it is ${longest} words long!`);

// Part A - Question 4
// I would use split(" ") and create new array from the words that were split between the spaces.
// Then, follow what I did above.

//Part B
function odd() {
  let list = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];
  let oddList = [];

  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(i)%2 != 0) {
      oddList.push(list[i]);
    }
  }
  return oddList;
}
console.log(`Part B: ${odd()}`);

// Part C
function factorial(n) {
  var fac = 1;

  while(n != 0) {
    fac *= n;
    n--;
  }
  return fac;
}
console.log(`Part C: The factorial of 5 is ${factorial(5)}`);

// Part D
let mpg = 120;

if (mpg >= 120) {
  console.log("Part D: If you are using the Tom Ogle fuel system, props!");
}
else if (mpg > 35) {
  console.log("Part D: The fish of the sea smile at your conservation!");
}
else if (mpg > 29) {
  console.log("Part D: Not many gas stops will be taken!");
}
else if (mpg > 20) {
  console.log("Part D: Atmosphere smiles at your decision!");
}
else if (mpg > 16) {
  console.log("Part D: It's palpable!");
}
else if (mpg > 10) {
  console.log("Part D: Planet still frowns upon this, and so does your wallet!");
}
else if (mpg <= 10) {
  console.log("Part D: Gas guzzler!");
}
