//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
let nums = [1,2,3,4,5,6,7,8,9,10];

console.log(nums.filter(evenNums));

function evenNums(nums) {
  return nums%2===0;
}

console.log(nums.filter(oddNums));
function oddNums(nums) {
  return nums%2!=0;
}

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
let six = [1, 6, 12, 13, 18];

function divisibleBySix(six) {
  return six.filter(i => i % 6 === 0);
}
console.log(divisibleBySix(six));

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
let arr = [10, 12, 20, 50];
let sum = arr.reduce(function (acc, currentValue) {
  return acc + currentValue;
})
console.log(sum)

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
let mul = [1, 2, 3, 4, 5];
let mulSum = mul.reduce(function (acc, currentValue) {
  return acc * currentValue;
})
console.log(mulSum);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
let sqr = [3, 2, 3];
let sqrd = sqr.reduce(function (acc, currentValue) {
  return acc ** currentValue;
})
console.log(sqrd);

//Exercise #6
//using the .filter(), filter out the Full Stack residents
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

let fsr = users.filter(i => i.role === 'Full Stack Resident');
console.log(fsr)

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
let x = [{ name: 'Josh', age: 24 }, { name: 'Meghan', age: 34 }, { name: 'Samantha', age: 20 }];
let xSum = x.reduce(function (prev, currentValue) {
  return prev.age + currentValue.age;
})
console.log(xSum)
