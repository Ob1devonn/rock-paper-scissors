const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//create a computer choice selector
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//create the logic of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!"; //tie logic
  } else if (
    //how player would win
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    //add a point to player and return winner
    playerScore++;
    return "You win!";
  } else {
    //anything else computer wins
    computerScore++;
    return "Computer wins!";
  }
}
