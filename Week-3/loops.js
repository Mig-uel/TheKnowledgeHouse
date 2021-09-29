//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

for (let i = 0; i <= 10; i++) {
  console.log(`${i} times 9 is ${i*9}`)
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

let i = 5
while (i <= 50) {
  console.log(`Every fifth number starting from 5 is ${i}`);
  i+=5
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function dupes(arr) {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) { // j = i
      if (temp === arr[j]) {
        return arr[j];
      }
      else {
        temp = arr[i]
      }
    }
  }
}

console.log(`The duplicate number is ${dupes([2,7,5,5,8,3])}`);

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade() {
  for (let i = 60; i <= 100; i++) {
    switch (true) {
      case grade >= 90:
          console.log(`For number grade ${i}, you get letter grade A`);
          break;
      case grade >= 80:
          console.log(`For number grade ${i}, you get letter grade B`);
          break;
      case grade >= 70:
          console.log(`For number grade ${i}, you get letter grade C`);
          break;
      case grade >= 60:
          console.log(`For number grade ${i}, you get letter grade D`);
          break;
      default:
          console.log(`For number grade ${i}, you get letter grade F`);
        };
  }
}
