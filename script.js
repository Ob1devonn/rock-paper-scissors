
const winners = [];
const list = ['rock', 'paper', 'scissors'];


function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    console.log(computerSelection,' comp');
    console.log(playerSelection, ' player');
    //check winner and store for later
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function game(){
    playRound();
}
//create random selector for computer
function computerChoice(){
    return list[Math.floor(Math.random()*list.length)];
}
//get and validate player's choice
function playerChoice(input){
    input = prompt('Type Rock, Paper, or Scissors');
    input = input.toLowerCase();
    validate = validateX(input);
    while(validate === false){
        return playerChoice(input);
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
     console.log('victor', victor);
     return victor;
}

game();