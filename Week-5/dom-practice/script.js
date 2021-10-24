let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {

  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changeTitle() {
    document.getElementById("main-title").innerHTML = "DOM Toretto";
  }
  changeTitle();

  // Part 2
  function changeBackground() {
    document.body.style.backgroundColor = "lightgrey";
  }
  changeBackground();

  // Part 3
  function removeLastItem() {
    let list = document.getElementById('favorite-things');
    let updatedList = list.removeChild(list.lastElementChild)
  }
  removeLastItem();

  // Part 4
  function fontSize() {
    let text = document.getElementsByClassName('special-title');

    for (let i = 0; i < text.length; i++) {
      text[i].style.fontSize = '2rem';
    }
  }
  fontSize();

  // Part 5
  function pastRaces() {
    let races = document.getElementById('past-races');
    let newRaces = [];

    for (let i = 0; i < races.children.length; i++) {
      newRaces.push(races.children[i]);
    }
    races.removeChild(newRaces[3]);
  }
  pastRaces();

  // Part 6
  function newLi() {
    let newLi = document.createElement('li');
    let liText = document.createTextNode('New York City');

    newLi.appendChild(liText);

    let list = document.getElementById('past-races');
    list.appendChild(newLi);
  }
  newLi();

  // Part 7
  function newPost() {
    let parent = document.getElementById('dom-adventures')
    let newDiv = document.createElement('div');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');

    // newDiv.classList.add('blog-post purple');
    newDiv.setAttribute('class', 'blog-post purple')

    let h1Text = document.createTextNode('New York City');
    newH1.appendChild(h1Text);
    let pText = document.createTextNode('I raced Paul Walker and lost his car.')
    newP.appendChild(pText)

    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);

    // parent.appendChild(newDiv);
    parent.parentNode.insertBefore(newDiv, parent.nextSibling);
  }
  newPost();
}
