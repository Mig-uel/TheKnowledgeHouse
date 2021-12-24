window.onload = function () {
  const body = document.body;

  console.log(body);

  function createDuck() {
    const duck = document.createElement('div');
    duck.classList.add('duck');
    body.appendChild(duck);
    setInterval(() => {
      duck.classList.toggle('flap');
    }, 250);
    setInterval(() => {
      moveDuck(duck);
    }, 1000);
    return duck;
  }

  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  function randomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  }

  function moveDuck(duck) {
    const { x, y } = randomPosition();
    duck.style.left = `${x}px`;
    duck.style.top = `${y}px`;
  }

  function removeDuck(duck) {
    setTimeout(() => {
      body.removeChild(duck);
    }, 1000);
  }

  function checkForWinner() {
    const ducks = document.querySelectorAll('.duck');
    if (ducks.length === 0) {
      alert('YOU WIN!');
    }
  }
  // 14. Call checkForWinner() every second
  setInterval(checkForWinner, 1000);
};
