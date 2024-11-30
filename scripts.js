console.log("Test");

function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.3333) {
    choice = "Rock";
  }
  else if (choice > 0.3333 && choice < 0.6666) {
    choice = "Paper";
  }
  else if (choice >= 0.6666) {
    choice = "Scissors";
  }
  else {
    console.log("Could not choose for computer.")
  }
  console.log(choice);
}