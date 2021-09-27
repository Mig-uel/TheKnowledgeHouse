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
