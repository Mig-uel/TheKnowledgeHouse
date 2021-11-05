//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
let arr1 = [2, 4, 6, 8]
let arr2 = [1, 3, 5, 7, 9]

let arr3 = [...arr1, ...arr2].sort()
console.log(arr3)

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

let favoriteFoods = {
  pizza: "Costco",
  burger: "Five Guys",
  wings: "Wingstop"
}
let imaginaryFoods = {
  bread: "Conchitas",
  mexican: "Chipotle",
  dessert: "Stone Cold Creamery"
}

let allFoods = {
  ...favoriteFoods,
  ...imaginaryFoods
}

console.log(allFoods)


// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

let favCharacter = {
  characterName: "Tony Stark",
  age: 45,
  hometown: "Long Island"
}

let { characterName, age, hometown } = favCharacter
console.log(`Name: ${characterName}, Age: ${age}, Hometown: ${hometown}`)

let {first, ... second} = favCharacter;
console.log(first, second)

let pet = {}

favCharacter = { ... favCharacter, pet };

favCharacter.pet.age = 7; 
favCharacter.pet.breed = "Cat"; 
favCharacter.pet.name = "Oreo";


console.log(pet.name); 