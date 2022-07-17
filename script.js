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

    switch(computerSelection) {
        case playerSelection:
            updateDOM(++robotScore, robotScoreDOM);
            updateDOM(++playerScore, playerScoreDOM);
            break;
        case 'rock':
            playerSelection === 'paper' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
            break;
        case 'paper':
            playerSelection === 'scissors' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
            break;
        default:
            playerSelection === 'rock' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    }

    // if (computerSelection === playerSelection) {
    //     updateDOM(++robotScore, robotScoreDOM);
    //     updateDOM(++playerScore, playerScoreDOM);
    //     return;
    // }
    // if (computerSelection === 'rock') {
    //     return playerSelection === 'paper' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    // }
    // if (computerSelection === 'paper') {
    //     return playerSelection === 'scissors' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    // }
    // if (computerSelection === 'scissors') {
    //     return playerSelection === 'rock' ? updateDOM(++playerScore, playerScoreDOM) : updateDOM(++robotScore, robotScoreDOM);
    // }

}

function updateDOM (content, contentDOM) {
    contentDOM.textContent = content;
}


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// let startGame;

// do {
//     startGame = prompt("How many times do you want to play before you reload the page? :)");
//     game(startGame);
// }
// while (isNaN(startGame))

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  DOM  ////////////////////////////////////////////
const btns = document.querySelectorAll('.btn');
const robotScoreDOM = document.querySelector('.robot-score');
const playerScoreDOM = document.querySelector('.player-score');
const resultDOM = document.querySelector('.result');
robotScoreDOM.textContent = playerScoreDOM.textContent = 0;

let playerScore = 0;
let robotScore = 0;

btns.forEach(btn => btn.addEventListener('click', playRound));


// My next step is to announce a winner once one player reaches 5 points.
// Next, I'll try a break <label> statement to break out of the ifs if one of 'em satisfies the condition