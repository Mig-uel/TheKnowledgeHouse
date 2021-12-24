// Part 1
console.log("Part 1: ")
function func(i) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  func(i);
}

//Part 2
function odds() {
  let arr = [];
  for (let i = 3; i <= 103; i++) {
    if (i%2 != 0) {
      arr.push(i)
    }
  }
  return arr;
}
console.log(`Part 2: ${odds()}`);

// Part 3
function arraySum(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
let numsArr = [1,2,3,4,5];
console.log(`Part 3: ${arraySum(numsArr)}`);

// Part 4
console.log("Part 4: ")
for(let i = 9; i >= 0; i--) {
  console.log(i);
}

//Part 5
function factorial(num) {
  var fac = 1;
  while(num != 0) {
    fac *= num;
    num--;
  }
  return fac;
}
console.log(`Part 5: The factorial of 5 is ${factorial(5)}`);

//Part 6
function sums() {
  let userInput = prompt('Up to what number "n" would you like to add up? ');
  let sum = 0;
  for (let i = 0; i <= userInput; i++) {
    sum+=i;
  }
  return sum;
}
console.log(`Part 6: The sum of the numbers is: ${sums()}`);

//Part 7
function letterZ() {
  let str = "donuts";
  let strArr = [];
  for(let i = 0; i < str.length; i++) {
    if (i%2 === 0+1) {
      strArr.push("z");
    }
    else {
      strArr.push(str[i])
    }
  }
  return strArr;
}
console.log(`Part 7: ${letterZ()}`);
