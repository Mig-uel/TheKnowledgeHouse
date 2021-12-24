const weeklyIncome = parseInt(prompt("What is your weekly income? "));
const foodCosts = parseInt(prompt("How much is your food costs? "));
const housingCosts = parseInt(prompt("What is your housing costs? "));
const transportationCosts = parseInt(prompt("What is your transportation costs? "));
const otherCosts = parseInt(prompt("What are your other costs? "));
const saveUp = parseInt(prompt("How much do you want to save in a year? "))

savedEnough = saveUp/52;

totalCosts = (weeklyIncome + foodCosts + housingCosts + transportationCosts + otherCosts)

revenue = (weeklyIncome - totalCosts)

if (revenue > savedEnough) {
  console.log("You are on track!")
}
else {
  x = (savedEnough - revenue)
  console.log("You need to save $" + x + " more a week!")
}
