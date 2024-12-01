console.log("Test");
let humanChoice;
let computerChoice;

function getComputerChoice() {
  computerChoice = Math.random();
  if (computerChoice <= 0.3333) {
    computerChoice = "Rock";
  }
  else if (computerChoice > 0.3333 && computerChoice < 0.6666) {
    computerChoice = "Paper";
  }
  else if (computerChoice >= 0.6666) {
    computerChoice = "Scissors";
  }
  else {
    console.log("Could not choose for computer.")
  }
  console.log(computerChoice);
}

function getHumanChoice() {
  answer = prompt("Choose rock, paper or scissors.");
}