//Assignment 7

function evenOdd(arr) {
  //Initializing Arrays for even/odd names
  var even = [];
  var odd = [];

  //Even/odd Splitting Loop
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].length % 2 == 0)
      even.push(arr[i]);
    else
      odd.push(arr[i]);
  }

  //Changing Even Letters
  for (x = 0; x < even.length; x++)
    even[x] = 'b' + even[x].slice(1); // Sets Name at x index to equal 'b' and adding even again but at index 1 - it's length

  for (x = 0; x < odd.length; x++)
    odd[x] = odd[x].slice(0, odd[x].length - 1) + 'c'

  //Printing Even and Odd Arrays
  console.log("Even Array: " + even);
  console.log("Odd Array: " + odd);

  //Returning Even array
  return even;
}

var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];
var even_array = evenOdd(names_array);

console.log("\nEven Array Returned: " + even_array);
