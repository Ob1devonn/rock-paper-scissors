//create an array to hold the winner of each round
const wins = [];
//create a element array for buttons
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("resultDiv");
//set scores/rounds to zero
let rounds,
  playerScore,
  computerScore = 0;
//get computers choice by random
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
//determine winner based off game logic
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win!`;
  } else {
    return `Computer Wins!`;
  }
}

function game(playerChoice) {
  if (rounds < 5) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice}, and Computer picked ${computerChoice}. ${result}`;
  }
}
