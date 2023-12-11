const ANSWERS = ["rock", "paper", "scissors"];
const RESULT = ["Paper beats Rock", "Rock beats Scissors", "Scissors beats Paper", "It's a Tie!"];


function getComputerChoice() {
    const choice = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return choice;
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Mama mia it's a tie";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
};

function roundResults(playerSelection, computerSelection) {
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


const playerSelection = "rock" //prompt("Input your champion: Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(roundResults(playerSelection, computerSelection))