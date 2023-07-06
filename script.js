 // Add event listeners to the buttons
 document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
  });

  document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
  });

  document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
  });

  // Function to play the game
  function playGame(playerChoice) {
    // Generate a random choice for the computer
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    var result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }

    // Display the results
    console.log("Player chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);
    console.log("Result: " + result);
  }