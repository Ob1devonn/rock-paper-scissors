const wins = [];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
    
}


function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "It's a tie!";
    }else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
        ){
            return `You win!`;
        }else {
            return `Computer Wins!`;
        } 
    }
    
function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let round = 1; round <= 5; round++){
        const computerSelection = getComputerChoice();
        const playerSelection;
        
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round} : ${result}`);
        console.log('---------------------------------------------------');
        if(result === 'You win!'){
            userScore++;
        }else if (result === 'Computer Wins!'){
            computerScore++;
        }
    }

    console.log(`Final Score: You:${userScore} Computer:${computerScore}`);
    if(userScore > computerScore){
        console.log("You win the game!");
    } else if(computerScore > userScore){
        console.log("Computer wins the game!");
    } else{
        console.log ("The game was a Tie!!!");
    }
}

game();
