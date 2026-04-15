let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  // console.log(choice);
  let result = choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
  //  console.log(result);
  return result;
}

function getHumanChoice() {
  let computerChoice = getComputerChoice();
  let choice = prompt("Enter Rock, Paper, or Scissors!: ");
  // console.log(choice);
  return choice;
}

function playRound(cChoice, hChoice) {
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
  // console.log("Human choice: " + hChoice);
  // console.log("Computer choice: " + cChoice);
  // console.log("Result: " + result);

  if (result) {
    playerScore++;
    console.log("You win! " + hChoice + " beats " + cChoice + ". ");
    console.log(
      "playerScore: " + playerScore + " computerScore: " + computerScore,
    );
  } else {
    computerScore++;
    console.log("You lose! " + cChoice + " beats " + hChoice + ". ");
    console.log(
      "playerScore: " + playerScore + " computerScore: " + computerScore,
    );
  }
}

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }
  let result = playerScore === 5;
  console.log(result ? "Human wins!" : "Computer wins!");
}

playGame();
