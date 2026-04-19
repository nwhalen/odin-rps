let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  // console.log(choice);
  //  console.log(result);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
  let computerChoice = getComputerChoice();
  let choice = prompt("Enter Rock, Paper, or Scissors!: ");
  // console.log(choice);
  return choice;
}

const btnDiv = document.querySelector(".button-container");
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorsBtn);

btnDiv.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  console.log("clicked " + e.target.textContent);
  let hChoice = e.target.textContent.toLowerCase();
  playRound(getComputerChoice(), hChoice);
});

const scoreDiv = document.querySelector(".score-container");
const playerScoreText = document.createElement("p");
playerScoreText.textContent = "Player Score: " + playerScore;
const computerScoreText = document.createElement("p");
computerScoreText.textContent = "Computer Score: " + computerScore;
scoreDiv.appendChild(computerScoreText);
scoreDiv.appendChild(playerScoreText);

function updateScore() {
  playerScoreText.textContent = "Player Score: " + playerScore;
  computerScoreText.textContent = "Computer Score: " + computerScore;
}

function playRound(cChoice, hChoice) {
  if (playerScore === 5 || computerScore === 5) {
    console.log(playerScore === 5 ? "Player wins! " : "Computer wins! ");
    console.log("Starting a new game!");
    playerScore = 0;
    computerScore = 0;
    const winnerText = document.querySelector(".winner-text");
    winnerText.remove();
    updateScore();
    return;
  }
  hChoice = hChoice.toLowerCase();
  if (hChoice === cChoice) {
    console.log("Draw! Starting another round. ");
    return;
  }
  let result =
    hChoice === "rock" && cChoice === "scissors"
      ? true
      : hChoice === "paper" && cChoice === "rock"
        ? true
        : hChoice === "scissors" && cChoice === "paper";

  if (result) {
    playerScore++;
    console.log("You win! " + hChoice + " beats " + cChoice + ". ");
    updateScore();
    console.log(
      "playerScore: " + playerScore + " computerScore: " + computerScore,
    );
  } else {
    computerScore++;
    console.log("You lose! " + cChoice + " beats " + hChoice + ". ");
    updateScore();
    console.log(
      "playerScore: " + playerScore + " computerScore: " + computerScore,
    );
  }
  playGame();
}

function playGame() {
  if (playerScore === 5 || computerScore === 5) {
    console.log(playerScore === 5 ? "Player wins!" : "Computer wins!");
    const winnerDiv = document.querySelector(".winner-container");
    const winnerText = document.createElement("p");
    winnerText.classList.add("winner-text");
    winnerText.textContent =
      playerScore === 5 ? "Player wins! " : "Computer wins! ";
    winnerDiv.appendChild(winnerText);
  }
}

playGame();
