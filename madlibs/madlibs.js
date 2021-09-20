function madlibs() {
  var player = parseInt(prompt("Would you like Story One or Story Two? (Enter 1 or 2)"));

  if (player < 1 || player > 2) {
    console.log("Unknown choice!");
  }
  else if (player === 2) {
    storyTwo();
  }
  else if (player === 1) {
    storyOne();
  }
}

function storyOne() {
  var adj = prompt("Type an adjective: ");
  var place = prompt("Type a general place: ");
  var vehicle = prompt("Type a vehicle name (plural): ");
  var game = prompt("Type the name of a game: ");
  var noun = prompt("Type a plural noun: ");
  var verbOne = prompt("Type an 'ing' verb: ");
  var verbTwo = prompt("Type another 'ing' verb: ");
  var food = prompt("Type a food name: ");
  var sport = prompt("Type the name of a sport: ");
  var verbThree = prompt("Type another 'ing' verb: ");
  var emotion = prompt("Type an emotion: ");
  var number = prompt("Type a number: ");

  console.log(`
    A vacation is when you take a trip to some ${adj} place near an amazing ${place}.
    A good vacation place is one where you can ride ${vehicle} or play ${game} or go
    hunting for ${noun}. I like to spend my time ${verbOne} or ${verbTwo}. When parents go on a
    vacation, they spend their time eating three ${food} a day. Usually, fathers
    play ${sport}, and mothers spend their time ${verbThree}. Adults need vacations more than
    kids because adults are always very ${emotion} because they have to work ${number} hours
    every day all year just to afford their vacations!`);
}

function storyTwo() {
  var adjOne = prompt("Type an adjective: ");
  var placeOne = prompt("Type a famous place: ");
  var nounOne = prompt("Type a plural noun: ");
  var adjTwo = prompt("Type another adjective: ");
  var food = prompt("Type a food (plural): ");
  var emotion = prompt("Type an emotion: ");
  var verb = prompt("Type an 'ing' verb: ");
  var placeTwo = prompt("Type a common place: ");
  var adjThree = prompt("Type another adjective: ");
  var nounTwo = prompt("Type a noun: ");
  var adjFour = prompt("Type another adjective: ");
  var nounThree = prompt("Type another noun: ");
  var fam = prompt("Type a family member: ");
  var adjFive = prompt("Type another adjective: ");

  console.log(`
    Today we took a ${adjOne} fieldtrip to ${placeOne}. They're famous for making ${nounOne}
    and for cooking ${adjTwo} ${food}. Eating all that food made me feel ${emotion}. Next
    we enjoyed the local tradition of ${verb} in the middle of the ${placeTwo}! Finally,
    we went shopping for souvenirs. I bought a ${adjThree} ${nounTwo} for myself, and a ${adjFour}
    ${nounThree} for my favorite ${fam}. I'll definitely never forget this ${adjFive} trip!
    `
  );
}
madlibs();
