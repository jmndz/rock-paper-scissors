
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
    playerSelection = playerSelection.toLowerCase();
    let message;

    if(playerSelection==="rock" && computerSelection==="paper"){
        return message = "You lose. Paper beats Rock";
    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        return message = "You win. Rock beats Scissors";
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        return message = "You win. Paper beats Rock";
    }else if(playerSelection==="paper" && computerSelection==="scissors"){
        return message = "You lose. Scissors beats Paper";
    }else if(playerSelection==="scissors" && computerSelection==="rock"){
        return message = "You lose. Rock beats Scissors";
    }else if(playerSelection==="scissors" && computerSelection==="paper"){
        return message = "You win. Scissors beats Paper";
    }else{
        return message = "It's a tie.";
    }
}

function game(){
    
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Choose your weapon: Rock, Paper, Scissors","");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
