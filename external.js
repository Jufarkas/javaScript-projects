const answers = ["Rock", "Paper", "Scissors"];
const result = ["Paper beats Rock", "Rock beats Scissors", "Scissors beats Paper", "It's a Tie!"];


function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)] + " is the computer's choice";
};


function getPlayerChoice() {
    return answers[Math.floor(Math.random() * answers.length)] + " is the player's choice";
};



function startRound (playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return result[0] + ", computer wins!";
    } else if  (playerSelection == "Paper" && computerSelection == "Rock") {
        return result[0] + ", player wins!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return result[1] + ", computer wins!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return result[1] + ", player wins!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return result[2] + ", computer wins!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return result[2] + ", player wins!";
    } else if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
        return result[3];
    }
}