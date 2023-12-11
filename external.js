const ANSWERS = ["rock", "paper", "scissors"];
const RESULT = ["Paper beats Rock", "Rock beats Scissors", "Scissors beats Paper", "It's a Tie!"];
const playerSelection = prompt("Input your champion: Rock, Paper, or Scissors?").toLowerCase();

function getComputerChoice() {
    const choice = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return choice;
};

const computerSelection = getComputerChoice();

function startRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return RESULT[0] + ", computer wins!";
    } else if  (playerSelection == "paper" && computerSelection == "rock") {
        return RESULT[0] + ", player wins!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return RESULT[1] + ", computer wins!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return RESULT[1] + ", player wins!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return RESULT[2] + ", computer wins!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return RESULT[2] + ", player wins!";
    } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return RESULT[3];
    }
}

console.log(startRound(playerSelection, computerSelection));