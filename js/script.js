const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const winningMessage = document.createElement('p');

results.appendChild(winningMessage);

scissors.addEventListener("click", () => {
    round("scissors", computerPlay());
    console.log("scissors");
});



paper.addEventListener("click", () => {
    round("paper", computerPlay());
    console.log("paper");
});



rock.addEventListener("click", () => {
    round("rock", computerPlay());
    console.log("rock");
});



function computerPlay(){
    let computerChoice = "Nothing";
    let num = Math.floor(
            Math.random()*(4-1)+1
        );
    if(num === 1){
        computerChoice = "scissors";
    } else if (num === 2){
        computerChoice = "paper";
    }else if (num === 3){
        computerChoice = "rock";
    }else{
        return "Error";
    }
    return computerChoice;
}


function round(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let scoreIntPlayer = parseInt(playerScore.textContent);
    let scoreIntComputer = parseInt(computerScore.textContent);
    if(playerChoice==="rock"&&computerSelection==="scissors"){
        playerScore.textContent = `${scoreIntPlayer + 1}`;

        displayWinningMessage(1);
    }else if(playerChoice==="scissors"&&computerSelection==="paper"){
        playerScore.textContent = `${scoreIntPlayer + 1}`;
        
        displayWinningMessage(2);
    }else if(playerChoice==="paper"&&computerSelection==="rock"){
        playerScore.textContent = `${scoreIntPlayer + 1}`;
        
        displayWinningMessage(3);
    }else if(playerChoice==="rock"&&computerSelection==="paper"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        
        displayWinningMessage(4);
    }else if(playerChoice==="scissors"&&computerSelection==="rock"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        
        displayWinningMessage(5);
    }else if(playerChoice==="paper"&&computerSelection==="scissors"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        
        displayWinningMessage(6);
    }else if(playerChoice===computerSelection){
        
        
        displayWinningMessage(7);
    }else{
        console.log("you error");
        return "Error";
    }
}

function game(){
    
}

function displayWinningMessage(a){
    
    if(a===1){
        winningMessage.textContent = "Rock beats scissors. You Win!";
    }else if(a===2){
        winningMessage.textContent = "Scissors beats paper.You Win!";
    }else if(a===3){
        winningMessage.textContent = "Paper beats rock. You Win!";
    }else if(a===4){
        winningMessage.textContent = "Paper beats rock. You Lose!";
    }else if(a===5){
        winningMessage.textContent = "Rock beats scissors. You Lose!";
    }else if(a===6){
        winningMessage.textContent = "Scissors beats paper. You Lose!";
    }else if(a===7){
        winningMessage.textContent = "It\'s a tie!";
    }
   
}




