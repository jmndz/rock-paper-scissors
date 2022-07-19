const moveSelectionText = document.querySelector('.text');
const rock = document.getElementById('btn-rock');
rock.addEventListener('click', rockPlay);
const paper = document.getElementById('btn-paper');
paper.addEventListener('click', paperPlay);
const scissor = document.getElementById('btn-scissor');
scissor.addEventListener('click', scissorPlay);
const gameText = document.querySelector(".game-screen-footer-text");
const welcomeText = document.querySelector(".game-text");
const round = document.querySelector('.round');
const playerInfo = document.querySelector('.player-info');
const computerInfo = document.querySelector('.computer-info');
const playerRedPoints = document.querySelector('.player-points-red');
const playerGreenPoints = document.querySelector('.player-points-green');
const computerRedPoints = document.querySelector('.computer-points-red');
const computerGreenPoints = document.querySelector('.computer-points-green');
const playerIcon = document.querySelector('.player-icon');
const computerIcon = document.querySelector('.computer-icon');
const gameLog = document.querySelector('.game-log');
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame);
const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', restartGame)
const screenImg = document.querySelector('.screen-image');

let playerMove = '';
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;

function game(playerSelection){  
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if(playerScore === 5 || computerScore === 5) endGame();
    else enableButton();
}

function restartGame(){
    enableButton();
    playerMove = '';
    roundCounter = 1;
    playerScore = 0;
    computerScore = 0;
    //player info
    playerIcon.style.filter = 'brightness(100%)';
    playerGreenPoints.style.flex = 1;
    playerRedPoints.style.flex = 0;
    //computer info
    computerIcon.style.filter = 'brightness(100%)';
    computerGreenPoints.style.flex = 1;
    computerRedPoints.style.flex = 0;

    gameLog.textContent = 'Starting new game..';
    gameText.textContent = '';
    restartButton.style.visibility = 'hidden';
    screenImg.src = './img/space.png';
}

function endGame(){
    if(playerScore === 5){
        gameText.textContent = "Congratulations. You win.";
        computerIcon.style.filter = 'brightness(30%)';
        screenImg.src = './img/celebrate.gif';
        screenImg.style.backgroundSize = 'cover';
        screenImg.style.backgroundPosition = 0;
    }else if(computerScore ===5){
        gameText.textContent = "Game Over. You lose.";
        playerIcon.style.filter = 'brightness(30%)';
        screenImg.src = './img/defeat.gif';
        screenImg.style.backgroundSize = 'cover';
        screenImg.style.backgroundPosition = 0;
    }
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    restartButton.style.visibility = 'visible';
}

function startGame(){
    rock.style.visibility = 'visible';
    paper.style.visibility = 'visible';
    scissor.style.visibility = 'visible';
    gameText.style.visibility = 'visible';
    round.style.visibility = 'visible';
    playerInfo.style.visibility = 'visible';
    computerInfo.style.visibility = 'visible';
    moveSelectionText.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';

}

function rockPlay(){
    playerMove = 'rock';
    disableButton();
    game(playerMove);
}

function paperPlay(){
    playerMove = 'paper';
    disableButton();
    game(playerMove);
}

function scissorPlay(){
    playerMove = 'scissor';
    disableButton();
    game(playerMove);
}

function disableButton(){
    if(playerMove === 'rock'){
        rock.style.opacity = 1;
        paper.disabled = true;
        scissor.disabled = true;
    }else if(playerMove === 'paper'){
        paper.style.opacity = 1;
        rock.disabled = true;
        scissor.disabled = true;
    }else if(playerMove === 'scissor'){
        scissor.style.opacity = 1;
        rock.disabled = true;
        paper.disabled = true;
    }
}

function enableButton(){
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    rock.style.opacity = 0.5;
    paper.style.opacity = 0.5;
    scissor.style.opacity = 0.5;
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
        computerSelection= "scissor";
        return computerSelection;
    }
}

function playRound(playerSelection, computerSelection){
    if(roundCounter ===1) gameLog.textContent = '';
    if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        gameText.textContent = "You lose. Paper beats Rock";
        gameLog.textContent += `Round ${roundCounter} - Rock VS Paper`;
        playerHealthPoint();
    }else if(playerSelection==="rock" && computerSelection==="scissor"){
        playerScore++;
        gameText.textContent = "You win. Rock beats Scissor";
        gameLog.textContent += `Round ${roundCounter} - Rock VS Scissor`;
        computerHealthPoint();
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        gameText.textContent = "You win. Paper beats Rock";
        gameLog.textContent += `Round ${roundCounter} - Paper VS Rock`;
        computerHealthPoint();
    }else if(playerSelection==="paper" && computerSelection==="scissor"){
        computerScore++;
        gameText.textContent = "You lose. Scissor beats Paper";
        gameLog.textContent += `Round ${roundCounter} - Paper VS Scissor`;
        playerHealthPoint();
    }else if(playerSelection==="scissor" && computerSelection==="rock"){
        computerScore++;
        gameText.textContent = "You lose. Rock beats Scissor";
        gameLog.textContent += `Round ${roundCounter} - Scissor VS Rock`;
        playerHealthPoint();
    }else if(playerSelection==="scissor" && computerSelection==="paper"){
        playerScore++;
        gameText.textContent = "You win. Scissor beats Paper";
        gameLog.textContent += `Round ${roundCounter} - Scissor VS Paper`;
        computerHealthPoint();
    }else if(playerSelection==="rock" && computerSelection==="rock"){
        gameText.textContent = "It's a tie.";
        gameLog.textContent += `Round ${roundCounter} - Rock VS Rock`;
    }else if(playerSelection==="paper" && computerSelection==="paper"){
        gameText.textContent = "It's a tie.";
        gameLog.textContent += `Round ${roundCounter} - Paper VS Paper`;
    }else if(playerSelection==="scissor" && computerSelection==="scissor"){
        gameText.textContent = "It's a tie.";
        gameLog.textContent += `Round ${roundCounter} - Scissor VS Scissor`;
    } 

    roundCounter++;
    round.textContent = roundCounter;
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