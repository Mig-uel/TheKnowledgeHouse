function addCard() {
  document.getElementById("add-card-btn").addEventListener("click", () => {
    let cardForm = document.getElementById("create-card")
    cardForm.style.display = "block";

    let cancelButton = document.getElementById("cancel-btn")
    cancelButton.addEventListener("click", () => { cardForm.style.display = "none" });
  });

  let createCard = document.getElementById("create-btn");
  let parent = document.getElementById("flashcard-container");
  let counter = 0;

  createCard.addEventListener("click", () => {
    counter += 1;

    let question = document.getElementById("question-text").value;
    let answer = document.getElementById("answer-text").value;
    let card = document.createElement("li");

    card.className = "flashcard col-xl-2";
    card.id = counter;

    card.innerHTML = `
                        <h3>${question}</h3><br>
                        <a id = "toggle-${counter}" href = "#" > Show / Hide Answer</a > <br>
                        <p class="answer" id="answer-${counter}">${answer}</p><br>
                        <button onclick="document.getElementById(${counter}).remove()" class="btn btn-danger type=" button" id="delete-${counter}">Delete</button>
                      `;
    // <button class="btn btn-warning type="button" id=edit-${counter}">Edit</button>
    parent.appendChild(card);
  });
}
addCard();

