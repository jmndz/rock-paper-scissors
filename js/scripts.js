const moveSelection = document.querySelector('.move-selection');
const rock = document.getElementById('btn-rock').addEventListener('click', rockPlay);
const paper = document.getElementById('btn-paper').addEventListener('click', paperPlay);
const scissor = document.getElementById('btn-scissor').addEventListener('click', scissorPlay);
const gameText = document.querySelector(".game-screen-footer-text");
const welcomeText = document.querySelector(".game-text");
const round = document.querySelector('.round');
const playerRedPoints = document.querySelector('.player-points-red');
const playerGreenPoints = document.querySelector('.player-points-green');
const computerRedPoints = document.querySelector('.computer-points-red');
const computerGreenPoints = document.querySelector('.computer-points-green');

let playerMove = '';
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;

function game(playerSelection){  
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    roundCounter++;
    round.textContent = roundCounter;
    console.log('Player: '+playerScore);
    console.log('Computer: '+computerScore);
    if(playerScore === 5){
        gameText.textContent = "Game Over. You win.";
        moveSelection.style.display = 'none';
    }else if(computerScore ===5){
        gameText.textContent = "Game Over. You lose.";
        moveSelection.style.display = 'none';
    }
}

function restartGame(e){

}

function rockPlay(){
    playerMove = 'rock';
    game(playerMove);
}

function paperPlay(){
    playerMove = 'paper';
    game(playerMove);
}

function scissorPlay(){
    playerMove = 'scissor';
    game(playerMove);
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerSelection;

    if(randomNumber===1){
        computerSelection = "rock";
        return computerSelection;  
    } else if(randomNumber===2){
        computerSelection = "paper";
        return computerSelection;
    }else if(randomNumber===3){
        computerSelection= "scissors";
        return computerSelection;
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        gameText.textContent = "You lose. Paper beats Rock";
        playerHealthPoint();
    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        gameText.textContent = "You win. Rock beats Scissors";
        computerHealthPoint();
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        gameText.textContent = "You win. Paper beats Rock";
        computerHealthPoint();
    }else if(playerSelection==="paper" && computerSelection==="scissors"){
        computerScore++;
        gameText.textContent = "You lose. Scissors beats Paper";
        playerHealthPoint();
    }else if(playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        gameText.textContent = "You lose. Rock beats Scissors";
        playerHealthPoint();
    }else if(playerSelection==="scissors" && computerSelection==="paper"){
        playerScore++;
        gameText.textContent = "You win. Scissors beats Paper";
        computerHealthPoint();
    }
    else{
        gameText.textContent = "It's a tie.";
    }
}

function playerHealthPoint(){
    if(computerScore===1){
        playerGreenPoints.style.flex = 0.8;
        playerRedPoints.style.flex = 0.2;
    }else if(computerScore===2){
        playerGreenPoints.style.flex = 0.6;
        playerRedPoints.style.flex = 0.4;
    }else if(computerScore===3){
        playerGreenPoints.style.flex = 0.4;
        playerRedPoints.style.flex = 0.6;
    }else if(computerScore===4){
        playerGreenPoints.style.flex = 0.2;
        playerRedPoints.style.flex = 0.8;
    }else if(computerScore===5){
        playerGreenPoints.style.flex = 0;
        playerRedPoints.style.flex = 1;
    }
}

function computerHealthPoint(){
    if(playerScore===1){
        computerGreenPoints.style.flex = 0.8;
        computerRedPoints.style.flex = 0.2;
    }else if(playerScore===2){
        computerGreenPoints.style.flex = 0.6;
        computerRedPoints.style.flex = 0.4;
    }else if(playerScore===3){
        computerGreenPoints.style.flex = 0.4;
        computerRedPoints.style.flex = 0.6;
    }else if(playerScore===4){
        computerGreenPoints.style.flex = 0.2;
        computerRedPoints.style.flex = 0.8;
    }else if(playerScore===5){
        computerGreenPoints.style.flex = 0;
        computerRedPoints.style.flex = 1;
    }
}