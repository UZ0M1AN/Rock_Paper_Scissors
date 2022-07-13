console.log("****************************************")
console.log("Welcome to the Rock Paper Scissors Game");
console.log("****************************************")

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// FUNCTIONS ///////////////////////////////////////////
function computerPlay() {
    return ["rock", "paper", "scissors"][Math.round(Math.random() * 2)];
}

function playRound(playerSelection, computerSelection) {
    const rock = 'Rock breaks Scissors',
          paper = 'Paper covers Rock',
          scissors = 'Scissors cuts Paper'

    const winText = 'You Win!',
          loseText = 'You Lose!'

    if (computerSelection === 'rock') {
        if (computerSelection === playerSelection) return 'It\'s a tie!';
        return playerSelection.toLowerCase() === 'scissors' ? `${loseText} ${rock}` : `${winText} ${paper}`;
    }
    if (computerSelection === 'paper') {
        if (computerSelection === playerSelection) return 'It\'s a tie!';
        return playerSelection.toLowerCase() === 'rock' ? `${loseText} ${paper}` : `${winText} ${scissors}`;
    }
    if (computerSelection === 'scissors') {
        if (computerSelection === playerSelection) return 'It\'s a tie!';
        return playerSelection.toLowerCase() === 'paper' ? `${loseText} ${scissors}` : `${winText} ${rock}`;
    }

}

function game(n) {
    let playerSelection;
    for (let i = 1; i <= +n; i++) {
        playerSelection = prompt(`${i}: Rock Paper Scissors`);
        console.log(i + ': ' + playRound(playerSelection, computerPlay()));
    }
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

let startGame;

do {
    startGame = prompt("How many times do you want to play before you reload the page? :)");
    game(startGame);
}
while (isNaN(startGame))
