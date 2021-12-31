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
    
    if(playerChoice==="rock"&&computerSelection==="scissors"){
        return "You win. Rock beats Scissors";  
    }else if(playerChoice==="scissors"&&computerSelection==="paper"){
        return "You win. Scissors beats Paper";
    }else if(playerChoice==="paper"&&computerSelection==="rock"){
        return "You win. Paper beats rock";
    }else if(playerChoice==="rock"&&computerSelection==="paper"){
        return "You lose. Paper beats rock.";
    }else if(playerChoice==="scissors"&&computerSelection==="rock"){
        return "You lose. Rock beats scissors";
    }else if(playerChoice==="paper"&&computerSelection==="scissors"){
        return "You lose. Scissors beats paper";
    }else if(playerChoice===computerSelection){
        return "Tie";
    }else{
        return "Error";
    }
}

function game(){
    for(let i=0;i<5;i++){
       console.log(round(prompt("Enter your choice"), computerPlay()));
    }
}