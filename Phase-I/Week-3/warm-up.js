//write a function that adds 'ing' to an array of verbs and returns them as a new array
//bonus: make it work with verbs that end in a vowel, example: dance -> dancing
function addIng(arr)  {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 'ing';
  }
}

console.log(addIng(["eat", "sleep", "read"]));

/*
write a function that takes in a string and turns it into pig latin example: cat = atcay
if the word starts with a vowel, you should add 'yay' to the end. example: apple = appleyay
return the new pig latin string
*/
function pigLatin(str){
//your code here
}
console.log(pigLatin("cat"));
console.log(pigLatin("apple"));

//write a function that counts the number of vowels in a string and return the number of vowels
//hint look up .includes() method
const vowels = ["a", "e", "i", "o", "u"]
function countVowels(text) {
  //your code here
}
console.log(countVowels("banana"));
