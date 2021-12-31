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
    playerChoice = playerSelection.toLowerCase();
    
    if(playerSelection==="rock"&&computerSelection==="scissor"){
        console.log("You win. Rock beats Scissors");  
    }else if(playerSelection==="scissors"&&computerSelection==="paper"){
        console.log("You win. Scissors beats Paper");
    }else if(playerSelection==="paper"&&computerSelection==="rock"){
        console.log("You win. Paper beats rock");
    }else if(playerSelection==="rock"&&computerSelection==="paper"){
        console.log("You lose. Paper beats rock.")
    }else if(playerSelection==="scissors"&&computerSelection==="rock"){
        console.log("You lose. Rock beats scissors");
    }else if(playerSelection==="paper"&&computerSelection==="scissors"){
        console.log("You lose. Scissors beats paper");
    }else if(playerSelection===computerSelection){
        console.log("Tie");
    }else{
        console.log("Error");
    }
}