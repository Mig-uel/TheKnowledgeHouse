/* Exercise #1

  Create an object to hold information on your favorite recipe.
  It should have properties for *title* (a string), *servings*(a number)
  and *ingredients*(an array of strings)
  On separate lines (one console.log statement for each), log the 
  recipe information so it looks like:
  Mole
  Serves: 2
  Ingredients:
  Cinnamon
  Cumin
  Cocoa
*/

let recipe = {
  title: "Grilled Cheese",
  servings: 1,
  ingredients: ["Bread", "Cheese", "Butter"]
};
console.log(`${recipe.title} \nServes: ${recipe.servings} \nIngredients:\n${recipe.ingredients[0]}\n${recipe.ingredients[1]}\n${recipe.ingredients[2]}`);

/* Exercise #2

  Create an array of objects, where each object describes
  a book and has properties for the *title*(a string), *author*(a string)
  and *alreadyRead* (a boolean indicating if you read it yet)
  Iterate through the array of objects of books. For each book, log the book title and book
  author like so: "1984 by George Orwell"
  Now use an if/else statement to change the output depending on whether you read it
  or not. If you read it, log a string like "You already read "1984" by George Orwell"
  and vice versa if you havent read it yet.
*/

let books = [
  {
    title: "1984",
    author: "George Orwell",
    alreadyRead: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    alreadyRead: true
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    alreadyRead: false
  }
];

books.forEach(book => {
  if (book.alreadyRead)
    console.log(`You already read "${book.title}" by ${book.author}`);
  else
    console.log(`You still need to read "${book.title}" by ${book.author}`);
});

/* Exercise #3

  Create your object representing your favorite movie, like so
  const shawshank = {
     title: 'Shawshank Redemption',
     director: 'Frank Darabont',
     actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
     releaseYear: 1994, 
     duration: 142
  } 
  After you have created your movie object, print the title 
  of your movie using dot notation
  Print the director's name
  Print the release year
  Maybe your favorite came with an extended cut, including deleted scenes. 
  Write a statement that increases your movie object's duration by 30 minutes. 
*/
const ironman = {
  title: "Iron Man",
  director: 'Jon Favreau',
  actors: ['Robert Downey', 'Jon Favreau', 'Gwyneth Paltrow'],
  releaseYear: 2008,
  duration: 126
}
console.log(`Title: ${ironman.title} \nDirector: ${ironman.director} \nRelease Year: ${ironman.releaseYear} \nDuration: ${ironman.duration} minutes`);
console.log(`Extended Scenes (+30 min): ${ironman.duration += 30} minutes`);

/* Exercise #4 

 Using the array provided below, 
 How do you check if an object is an array or not? 
 You are checking if arrayList is an array, assuming it were an object before testing it
 That it is not an object
*/
let arrayList = [1, 2, 3];
console.log(Array.isArray(arrayList));
console.log(arrayList instanceof Array);

/* Exercise #5

   Write a function countCharacters that, when given a string as an argument,
   returns an object containing counts of the ocurrences of each character in 
   the string
   function countCharacters(){
  
    }
   countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}
*/
const countCharacters = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};
console.log(countCharacters("mississipi"));

/* Exercise #6

   Write a function that accepts two objects
   as arguments and 
   *extends* all of the key/value pairs of the second one to the first one
   function extend(obj1, obj2)  
   }
   extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}
*/
object1 = {
  a: 1,
  b: 2,
  c: 3
};
object2 = {
  c: 4,
  d: 5,
  e: 6
};
const extend = (obj1, obj2) => {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}
console.log(extend(object1, object2));