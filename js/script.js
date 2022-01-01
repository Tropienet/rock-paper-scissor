const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

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
        console.log("you win");
        return "You win. Rock beats Scissors";  
        
    }else if(playerChoice==="scissors"&&computerSelection==="paper"){
        playerScore.textContent = `${scoreIntPlayer + 1}`;
        console.log("you win");
        return "You win. Scissors beats Paper";
    }else if(playerChoice==="paper"&&computerSelection==="rock"){
        playerScore.textContent = `${scoreIntPlayer + 1}`;
        console.log("you win");
        return "You win. Paper beats rock";
    }else if(playerChoice==="rock"&&computerSelection==="paper"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        console.log("you win");
        return "You lose. Paper beats rock.";
    }else if(playerChoice==="scissors"&&computerSelection==="rock"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        console.log("you win");
        return "You lose. Rock beats scissors";
    }else if(playerChoice==="paper"&&computerSelection==="scissors"){
        computerScore.textContent = `${scoreIntComputer + 1}`;
        console.log("you win");
        return "You lose. Scissors beats paper";
    }else if(playerChoice===computerSelection){
        
        console.log("you tie");
        return "Tie";
    }else{
        console.log("you error");
        return "Error";
    }
}

function game(){
    
}


const scissors = document.querySelector('#scissors');

scissors.addEventListener("click", () => {
    round("scissors", computerPlay());
    console.log("scissors");
});

const paper = document.querySelector('#paper');

paper.addEventListener("click", () => {
    round("paper", computerPlay());
    console.log("paper");
});

const rock = document.querySelector('#rock');

rock.addEventListener("click", () => {
    round("rock", computerPlay());
    console.log("rock");
});

const results = document.querySelector('#results');

