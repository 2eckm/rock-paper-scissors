console.log("Test");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.3333) {
    computerChoice = "rock";
  }
  else if (computerChoice > 0.3333 && computerChoice < 0.6666) {
    computerChoice = "paper";
  }
  else if (computerChoice >= 0.6666) {
    computerChoice = "scissors";
  }
  else {
    console.log("Could not choose for computer.")
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors.");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both players chose " + humanChoice + ".");
  }
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore++;
  }
  else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("You win the game! The score is " + humanScore + " to " + computerScore + ".");
    humanScore = 0;
    computerScore = 0;
  }
  else if (humanScore < computerScore) {
    console.log("You lose the game! The score is " + humanScore + " to " + computerScore + ".");
    humanScore = 0;
    computerScore = 0;
  }
  else {
    console.log("The game ended in a tie! ...How is that possible?")
    humanScore = 0;
    computerScore = 0;
  }
}