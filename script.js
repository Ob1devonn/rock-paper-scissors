
const winners = [];
const list = ['rock', 'paper', 'scissors'];


function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //check winner and store for later
    const winner = checkWinner(playerSelection, computerSelection);
    //push round winner to winner[]
    winners.push(winner);
    console.log(winners);
    
    //write a function for logging the winner of each round and display who won game
    logRound(playerSelection, computerSelection, winner, round);
    console.log('---------------------------------------------');
}

function game(i){
    for(i = 1; i < 6; i++){
    playRound(i);
    }//Write a function for displaying score at end
    logWins();
}
//create random selector for computer
function computerChoice(){
    return list[Math.floor(Math.random()*list.length)];
}
//get and validate player's choice
function playerChoice(){
    let input = prompt('Type Rock, Paper, or Scissors');
    if(input === null){
        return playerChoice();
    }
    input = input.toLowerCase();
    let validate = validateX(input);
    while(validate === false){ 
        return validate = playerChoice();
    }
    return input;
}


//validate player input
function validateX(x){
    return list.includes(x.toLowerCase());
}
//check for the round winner
function checkWinner(x, y){
    victor =
    ((x == y) ? 'Tie':
    //list x winning conditions
    ((x == 'rock' && y == 'scissors')||
    (x == 'paper' && y == 'rock')||
    (x == 'scissors' && y == 'paper')) ?  'Player' :
    'Computer');
    return victor;
}

function logWins(){
    //use output values from winners[] to filter individual scores
    let playerWins = winners.filter((item) => item =='Player').length;
    let computerWins = winners.filter((item) => item =='Computer').length;
    let ties = winners.filter((item) => item =='Tie').length;
    let gameWonBy = gameWinner(playerWins, computerWins, ties);
    console.log('Results are:');
    console.log('Your wins: ', playerWins);
    console.log('Computer wins: ',computerWins);
    console.log('Ties: ',ties);
    console.log(gameWonBy);

}

function logRound(playerSelection, computerSelection, winner, round){
    console.log('Round: ', round);
    console.log('Player picked: ',playerSelection);
    console.log('Computer picked: ', computerSelection);
    console.log(winner, ': Won this round');
    
}
//Function for overall winner
function gameWinner(playerWins, computerWins, ties){
     let wonBy = 
    (playerWins > computerWins && playerWins > ties) ? 'Player Wins the Game!':
    (computerWins > playerWins && computerWins > ties) ? 'Computer Wins the Game!':
    'It was a TIE';
   return wonBy;
}
game();