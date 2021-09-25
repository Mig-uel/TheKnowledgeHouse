function fight() {
  let monster = prompt("What is the name of the monster that you are fighting?")
  let here = prompt("What is the name of the hero?")

  let villainHealth = 50;
  let heroHealth = 50;

  let heroDice = Math.floor(Math.random() * 20);
  let villainDice = Math.floor(Math.random() * 20);

  let attack = 1

  while (villainHealth === 0 || heroHealth === 9) {
    if (attack%2 === 0) {
      if (heroDice === 1 || heroDice === 2) {
        heroHealth -= 5
        alert("Oops! You accidentally stabed yourself. (-5 HP)");
        attack += 1
      }
      else if (heroDice === 3 || heroDice === 10) {
        alert("You missed! (0 HP)");
        attack += 1
      }
      else if (heroDice === 11 || heroDice === 18) {
        villainHealth -= 10;
        alert("Significant damage done! (-10 HP)");
        attack += 1;
      }
      else if (heroDice === 19 || heroDice === 20) {
        villainHealth -= 20;
        alert("Critical hit! (-20 HP)");
        attack += 1
      }
    }
    else {
      if (villainDice === 1 || villainDice === 2) {
        heroHealth -= 5
        alert("Oops! You accidentally stabed yourself. (-5 HP)");
        attack += 1
      }
      else if (villainDice === 3 || villainDice === 10) {
        alert("You missed! (0 HP)");
        attack += 1
      }
      else if (villainDice === 11 || villainDice === 18) {
        heroHealth -= 10;
        alert("Significant damage done! (-10 HP)");
        attack += 1;
      }
      else if (villainDice === 19 || villainDice === 20) {
        heroHealth -= 20;
        alert("Critical hit! (-20 HP)");
        attack += 1
    }
  }
}
