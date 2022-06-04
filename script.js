
const winners = [];
const list = ['rock', 'paper', 'scissors'];


function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    console.log(computerSelection,' comp');
    console.log(playerSelection, ' player');
    //check winner and store for later
    const winner = checkWinner(playerSelection, computerSelection);
    //Write a function for displaying score
    //write a function for logging the winner of each round and display who won game
}

function game(i){
    for(i = 1; i < 5; i++){
    playRound(i);
    }
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

game();