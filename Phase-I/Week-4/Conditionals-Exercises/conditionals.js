//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")


function greaterNum(a, b) {
  return `The greater number of ${a} and ${b} is ${a>b? a:b}.`;
}
console.log(greaterNum(5, 7))
console.log(greaterNum(123,98))


//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(code) {
  if (code === 'es') {
    return 'Hola, mundo!';
  }
  else if (code === 'de') {
    return 'Hallo Walt!'
  }
  else {
    return 'Hello, World!'
  }
}
console.log(helloWorld('en'))
console.log(helloWorld('de'))
console.log(helloWorld('es'))

//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(score) {
  switch (true) {
    case score > 90 && score <= 100:
      return "A";
    case score > 80 && score <= 89:
      return "B";
    case score > 78 && score <= 80 :
      return "C";
    case score > 56 && score <= 78:
      return "D";
    case score >= 0 && score <= 56:
      return "F";
    default:
      return "Not a valid score number, score must be between 0-100";
  }
}
console.log(assignGrade(65))
console.log(assignGrade(55))

//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, num) {
  if (num > 1) { 
    return `${num} ${noun}s`
  } else {
      return `${num} ${noun}`;
  }
}
console.log(pluralize("bug", "3")); 
console.log(pluralize("sheep", "3")); 