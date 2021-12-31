function computerPlay(){
    let computerChoice = "Nothing";
    let num = Math.floor(
            Math.random()*(4-1)+1
        );
    if(num === 1){
        computerChoice = "Scissors";
    } else if (num === 2){
        computerChoice = "Paper";
    }else if (num === 3){
        computerChoice = "Rock";
    }else{
        return "Error";
    }
    return computerChoice;
}
