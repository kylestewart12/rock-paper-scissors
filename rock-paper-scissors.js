function computerPlay() {
    function randomInt() {
        return Math.floor(Math.random()*3);
    }
    let outcomeNum = randomInt();
    switch (outcomeNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();
    victory = [`You win! ${player} beats ${computerSelection}.`, 1];
    loss = [`Looooooooser! ${computerSelection} beats ${player}.`, 0];
    tie = [`${player} ties ${computerSelection}.`, 0];
    switch (player) {
        case "rock":
            switch (computerSelection){
                case "rock":
                    return tie;
                    break;
                case "paper":
                    return loss;
                    break;
                case "scissors":
                    return victory;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection){
                case "rock":
                    return victory;
                    break;
                case "paper":
                    return tie;
                    break;
                case "scissors":
                    return loss;
                    break;
            }
        case "scissors":
            switch (computerSelection){
                case "rock":
                    return loss;
                    break;
                case "paper":
                    return victory;
                    break;
                case "scissors":
                    return tie;
                    break;
            }
        default:
            return "Choice error.";
    }
}

function game(){
    let gameCount = 0;
    let numWins = 0;
    while (gameCount<5){
        playerSelection = prompt("Rock, paper, or scissors? ");
        let outcome = playRound(playerSelection, computerPlay());
        if (outcome == "Choice error."){
            console.log(outcome);
        }
        else {
            console.log(outcome[0])
            numWins += outcome[1];
            gameCount++;
        }
    }
    if (numWins>=3){
        console.log(`${numWins}/5. You win!`)
    }
    else {
        console.log(`${numWins}/5. Loser!`)
    }
}

game();