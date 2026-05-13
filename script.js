let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  let randonNumber = Math.floor(Math.random() * 13) + 1;

  if (randonNumber === 1) {
    return 11;
  } else if (randonNumber >= 11) {
    return 10;
  }
  return randonNumber;
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  displayGame();
}

function displayGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got a BlackJack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game😕";
    isAlive = false;
  }
  messageEl.textContent = message;
  messageEl.style.color = "goldenrod";
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
  }
  displayGame();
}
