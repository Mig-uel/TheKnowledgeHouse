/* 1. 
  - Using filter make a function that is given an array of strings, and return a new array that only includes those 
  that are 5 characters or fewer in length.
*/

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(i => i.length <= 5)
}

// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
//expected output: ["by", "dog", "wolf", "eaten"]

/* 2.
- Make a function that takes a string and returns true if the string could be a 
- number else return false. 
*/
function isNum(str) {
  return isNaN(str) ? false : true
};

//test
console.log(isNum("3"))
//expected output: true 

console.log(isNum("three"))
//expected output: false

/*3
- Make a function that takes an array and returns the average of the array. 
*/
function averageArray(arr) {
  let sum = 0;

  arr.map(i => sum += i)

  return sum / arr.length
}
//test
console.log(averageArray[1, 2, 3])
//expected output: 2

console.log(averageArray[5, -10, 10, 20])
//expected output 6.25

/* 4.
*Using Reduce,
*Turn an array of numbers into a string of the numbers.
*/
function stringConcat(arr) {
  return arr.reduce((i, j) => i.toString() + j.toString())

  // let str = ""
  // for (let i = 0; i < arr.length; i++){
  //   str = str + arr[i]

  // }
  // return typeof str
}
//test
console.log(stringConcat([1, 2, 3]));
//expected output: "123"

/* 5
 The function should return an array containing repetitions of the number argument. 
 For instance, replicate(3, 5) should return [5, 5, 5].
 If the times argument is negative, return an empty arr */

let replicate = (rep, num) => {
  let newArr = []

  if (rep < 0)
    return newArr;

  for (let i = 0; i < rep; i++)
    newArr.push(num)

  return newArr;
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

/*6. 
- OOP has 4 pillars and we learned about each in this phase. 
- for each question - answer which pillar relates to the statement 
- A. The process by which one object can acquire the properties of another object 
- A. Answer: Inhertance
    
- B. To hide away implementation details inside a function, so when you call the function you don't have to understand exactly what it is doing
- B. Answer: Abstraction

- C. The action of enclosing something in its own container of related data 
- C. Answer: Encapsulation

- D. When a child class has its own unique behavior but still shares the same methods or behaviors of its parent's class 
- D. Answer: Polymorphism
*/

/* 7.
   - write a function takes in a boolean and returns that boolean as a string 
 */
function booleanToString(bool) {
  return typeof bool.toString()
}

// Test
console.log(booleanToString(true))
// expected output 'true' (as string)
// typeOf should be used to test it

/* 8.

- Write a function to check whether there is at least one element 
- Which occurs in two given sorted arrays of integers.

*/

function check_common_element(arr1, arr2) {
  let boolean_ = false

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        boolean_ = true
      }
    }
  }
  return boolean_
}

// Test
console.log(check_common_element([1, 2, 3], [3, 4, 5]));
// Expected output: true 

console.log(check_common_element([1, 2, 3], [5, 6, 7]));
// Expected output: false