//Assignment 6

function longestName(x) { //Function receives a parameter

  var longest_name = x[0]; //Sets longest name to 0 index of array longest_name

  for(i = 0; i < x.length; i++) //Loops through array
  {
    if(longest_name.length < x[i].length) { //Compares longest_name to each word in the array
      longest_name = x[i];
    }
    // console.log(x[i] + " is " + x[i].length + " long.") -- Tracing loop
  }
  return longest_name;
}

var arr = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]

var answer = longestName(arr);

console.log(answer + "; Length: " + answer.length);
