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
    victory = [`You win! ${player} beats ${computerSelection}.`, "w"];
    loss = [`Looooooooser! ${computerSelection} beats ${player}.`, "l"];
    tie = [`${player} ties ${computerSelection}.`, "t"];
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
            return ["Choice error.", "e"];
    }
}


let numGames = 0;
let numWins = 0;
let numLosses = 0;

scores = document.querySelector("#scores");
scores.textContent = `Score:  You: ${numWins} Computer: ${numLosses}`;
lastGame = document.querySelector("#lastGame");

options = document.querySelectorAll("button");
options.forEach((button) => {button.addEventListener("click", function(e){
    if (numWins<5 && numLosses<5){
        let outcome = playRound(e.target.id, computerPlay());
        if (outcome[1]=="w"){
            numWins++;
        }
        else if (outcome[1]=="l"){
            numLosses++;
        }
        lastGame.textContent = outcome[0];
        setTimeout(function(){lastGame.textContent = "";}, 3000);
        numGames++;
        scores.textContent = `Score:  You: ${numWins} Computer: ${numLosses}`;
    }
    else if (numWins>=5){
        scores.textContent = "You win! " + String.fromCodePoint(0x1F603);
    }
    else if (numLosses>=5){
        scores.textContent = "Loser! " + String.fromCodePoint(0x1F61D);
    }
})})