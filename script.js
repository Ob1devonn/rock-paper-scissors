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

//create a function to update results
function updateResults(result) {
  const resultDiv = document.getElementById("results");
  resultDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore} - ${result}`;
}

//target and write the winner to DOM
function updateWinner() {
  const winnerDiv = document.getElementById("winner");
  if (roundsPlayed === 5) {
    if (playerScore > computerScore) {
      winnerDiv.textContent = "Congratulations! You won the game!";
    } else if (computerScore > playerScore) {
      winnerDiv.textContent = "The computer wins the game!";
    } else {
      winnerDiv.textContent = "The game is Tied! Everyone is a winner!";
    }
  }
}

//Listen for button clicks to determine playerChoice
document.querySelectorAll(".choice").forEach((choice) => {
  //for each choice attach eventlistener
  choice.addEventListener("click", () => {
    if (roundsPlayed < 5) {
      // on click set playerSelection to the clicked on button id
      const playerSelection = choice.id;
      //get computerSelection
      const computerSelection = computerChoice();
      //play a round and store results
      const result = playRound(playerSelection, computerSelection);
      //place the results on display
      updateResults(result);

      roundsPlayed++;
      if (roundsPlayed === 5) {
        updateWinner();
      }
    }
  });
});
