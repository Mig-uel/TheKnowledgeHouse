arr = ["Wesley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

first_name = []
last_name = []

for (i = 0; i < arr.length; i++) {
  const myArr = arr[i].split(" ")
  console.log(myArr)

  for (x = 0; x < 1; x++) {
    first_name.push(myArr[x])
    last_name.push(myArr[x+1])
  }
}
console.log(first_name)
console.log(last_name)
