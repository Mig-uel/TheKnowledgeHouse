//Assingment 4 

var arr = [1,45,32,21,5,17,43,93];
var x = 25;

for (i = 0; i < arr.length; i++) { //Loops through array and compares each number to 25
  if (arr[i] < 25)
    console.log("Number: " + arr[i] + " is under.")
  else
    console.log("Number: " + arr[i] + " is over.")
}
