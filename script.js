console.log("UZOMIAN");

function computerPlay() {
    return ["rock", "paper", "scissors"][Math.round(Math.random() * 2)];
}

// console.log(computerPlay());

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

// console.log(playRound('rock', computerPlay()))