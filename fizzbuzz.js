// First Part

// let x = 3;
// let result = "";
//
// if (x%5 == 0) {
//   result = "Buzz";
// }
// else if (x%3 == 0) {
//   result = "Fizz"
// }
// else if (x%3 == 0 && x%5 == 0) {
//   result = "FizzBuzz"
// }
// else if (x%3 != 0 || x%5 != 0) {
//   result = x;
// }
//
// console.log(result)


// Second Part

let x = 15;
let result = "";

for (var i = 0; i <= x; i++) {
  if (i%5 == 0) {
    result = "Buzz";
    console.log(result);
  }
  else if (i%3 == 0) {
    result = "Fizz";
    console.log(result);
  }
  else if (i%3 == 0 && i%5 == 0) {
    result = "FizzBuzz";
    console.log(result);
  }
  else if (i%3 != 0 || i%5 != 0) {
    result = i;
    console.log(result);
  }
}
