console.log("****************************************")
console.log("Welcome to the Rock Paper Scissors Game");
console.log("****************************************")

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// FUNCTIONS ///////////////////////////////////////////
function computerPlay() {
    return ["rock", "paper", "scissors"][Math.round(Math.random() * 2)];
}

function playRound(e, playerSelection, computerSelection) {
    playerSelection = e.target.dataset.rps;
    computerSelection = computerPlay();
    // console.log(computerSelection, playerSelection);

    // if (robotScore == 5 || playerScore == 5) {
    //     if (robotScore == playerScore) updateDOM("It's a tie!", resultDOM);
    //     if (robotScore > playerScore) updateDOM("Robot wins!", resultDOM);
    //     updateDOM("Player wins", resultDOM);
    // } 

    if (computerSelection === playerSelection) {
        updateDOM(++robotScore, robotScoreDOM);
        updateDOM(++playerScore, playerScoreDOM);
        return;
    }
    if (computerSelection === 'rock') {
        return playerSelection === 'paper' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    }
    if (computerSelection === 'paper') {
        return playerSelection === 'scissors' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    }
    if (computerSelection === 'scissors') {
        return playerSelection === 'rock' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    }

}

function updateDOM (content, contentDOM) {
    contentDOM.textContent = content;
}

// function winner (robot, player) {
//     if (robot === 5) return `${robot}`
// }

// function game(n) {
//     let playerSelection;
//     for (let i = 1; i <= +n; i++) {
//         playerSelection = prompt(`${i}: Rock Paper Scissors`);
//         console.log(i + ': ' + playRound(playerSelection, computerPlay()));
//     }
// }

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// let startGame;

// do {
//     startGame = prompt("How many times do you want to play before you reload the page? :)");
//     game(startGame);
// }
// while (isNaN(startGame))

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const btns = document.querySelectorAll('.btn');
const robotScoreDOM = document.querySelector('.robot-score');
const playerScoreDOM = document.querySelector('.player-score');
const resultDOM = document.querySelector('.result');

let playerScore = 0;
let robotScore = 0;

updateDOM(robotScore, robotScoreDOM);
updateDOM(playerScore, playerScoreDOM);

btns.forEach(btn => btn.addEventListener('click', playRound));


