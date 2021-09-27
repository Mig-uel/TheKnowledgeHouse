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
