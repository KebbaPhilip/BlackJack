let firstCard = 4;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

if (sum < 21) {
  message = "Do you want to draw a new card?";
} else if (summ === 21) {
  message = "You've got a BlackJack!";
  hasBlackjack = true;
} else {
  message = "You're out of the game";
  isAlive = false;
}

console.log(message);
