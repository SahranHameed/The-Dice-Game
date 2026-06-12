// Dice images for each number (1 to 6)
const diceImages = [
"images/dice-1.png",
"images/dice-2.png",
"images/dice-3.png",
"images/dice-4.png",
"images/dice-5.png",
"images/dice-6.png"
];

// Score tracking
let wins1 = 0;
let wins2 = 0;
let draws = 0;

// Roll Dice Function
function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const roll1Display = document.getElementById("roll1");
  const roll2Display = document.getElementById("roll2");
  const resultMsg = document.getElementById("result-msg");
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  // Remove previous winner highlight
  card1.classList.remove("winner");
  card2.classList.remove("winner");

  // Add rolling animation
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");

  setTimeout(() => {
    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
  }, 1200);

  // Generate random numbers 1–6
  const randomNum1 = Math.floor(Math.random() * 6) + 1;
  const randomNum2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  dice1.src = diceImages[randomNum1 - 1];
  dice2.src = diceImages[randomNum2 - 1];

  // Update roll values
  roll1Display.textContent = randomNum1;
  roll2Display.textContent = randomNum2;

  // Determine winner
  if (randomNum1 > randomNum2) {
    resultMsg.textContent = "🏆 Player 1 Wins!";
    resultMsg.className = "result-msg win-p1";
    card1.classList.add("winner");
    wins1++;
    document.getElementById("wins1").textContent = wins1;

  } else if (randomNum2 > randomNum1) {
    resultMsg.textContent = "🏆 Player 2 Wins!";
    resultMsg.className = "result-msg win-p2";
    card2.classList.add("winner");
    wins2++;
    document.getElementById("wins2").textContent = wins2;

  } else {
    resultMsg.textContent = "🤝 It's a Draw!";
    resultMsg.className = "result-msg draw";
    draws++;
    document.getElementById("draws").textContent = draws;
  }
}

// Reset Scores Function
function resetScores() {
  wins1 = 0;
  wins2 = 0;
  draws = 0;

  document.getElementById("wins1").textContent = 0;
  document.getElementById("wins2").textContent = 0;
  document.getElementById("draws").textContent = 0;

  document.getElementById("roll1").textContent = "-";
  document.getElementById("roll2").textContent = "-";

  document.getElementById("result-msg").textContent = "Press Roll to Play!";
  document.getElementById("result-msg").className = "result-msg";

  document.getElementById("card1").classList.remove("winner");
  document.getElementById("card2").classList.remove("winner");

  document.getElementById("dice1").src = "images/dice-1.png";
  document.getElementById("dice2").src = "images/dice-1.png";
}
