console.log("****************************************")
console.log("Welcome to the Rock Paper Scissors Game");
console.log("****************************************")

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// FUNCTIONS ///////////////////////////////////////////
function computerPlay() {
    return ["rock", "paper", "scissors"][Math.round(Math.random() * 2)];
}

function playRound(e) {   
    if (!isPlaying) return;

    let playerSelection = e.target.dataset.rps;
    let computerSelection = computerPlay();

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

    if (robotScore >= 5 || playerScore >= 5) {
        robotScore > playerScore ? (resultDOM.textContent = 'Robot Wins! 🤖', resultDOM.classList.add('robot-win')) : playerScore > robotScore ? (resultDOM.textContent = 'Player Wins! 😎', resultDOM.classList.add('player-win')) : (resultDOM.textContent = 'It\'s a tie! 🤼‍♂️', resultDOM.classList.add('tie'));
        isPlaying = false;
    }
}

function updateDOM (content, contentDOM) {
    contentDOM.textContent = content;
}

function newGame() {
    playerScore = 0;
    robotScore = 0;
    isPlaying = true;
    robotScoreDOM.textContent = playerScoreDOM.textContent = 0;
    resultDOM.textContent = '';
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  DOM  ////////////////////////////////////////////
const btns = document.querySelectorAll('.btn');
const robotScoreDOM = document.querySelector('.robot-score');
const playerScoreDOM = document.querySelector('.player-score');
const resultDOM = document.querySelector('.result');
const newGameBtn = document.querySelector('.new-game');
robotScoreDOM.textContent = playerScoreDOM.textContent = 0;

let playerScore = 0;
let robotScore = 0;
let isPlaying = true;

btns.forEach(btn => btn.addEventListener('click', playRound));
newGameBtn.addEventListener('click', newGame);