const ANSWERS = [
    "rock", 
    "paper", 
    "scissors"
];

const OUTCOME = [
    "Paper beats Rock", 
    "Rock beats Scissors", 
    "Scissors beats Paper", 
    "Womp Womp, it's a Tie!"
];

let playerScore = 0;
let computerScore = 0;

game();
console.log("Player final score: " + playerScore);
console.log("Computer final score: " + computerScore);


//********** SELECTS COMPUTER'S CHOICE AND ASSIGNS ACCORDINGLY **********//

function getComputerChoice() {
    const choice = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return choice;
};

const computerSelection = getComputerChoice();


//********************** RESULT FROM SINGLE ROUND **********************//

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins, " + OUTCOME[0] + "!";
    } else if  (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins, " + OUTCOME[0] + "!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins, " + OUTCOME[1] + "!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins, " + OUTCOME[1] + "!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins, " + OUTCOME[2] + "!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins, " + OUTCOME[2] + "!";
    } else if (playerSelection == computerSelection) {
        return OUTCOME[3];
    }
};


//************ PLAY UNTIL PLAYER OR COMPUTER WIN 5 ROUNDS ************//

function game() {
    for (let i = 0; i < 100; i++) {
        const playerSelection = "rock" //prompt("Input your champion: Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        // console.log("Player score: " + playerScore);
        // console.log("Computer score: " + computerScore);
        
        for (let x = 0; x < 1; x++) {
            if (confirmWinner(playerSelection, computerSelection) == "player") {
                playerScore++;
            } else if (confirmWinner(playerSelection, computerSelection) == "computer") {
                computerScore++;
            }
        } if (playerScore == 5) {
            return console.log("Player Wins!");
        } else if (computerScore == 5) {
            return console.log("Computer Wins!");
        }
    }
};


//************************** SIMPLISTIC OUTCOME **************************//

function confirmWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {
        return "player";
    } else {
        return "computer";
    }
};