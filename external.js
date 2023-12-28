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

let gameButtons = document.querySelector('.gameButtons');
let resetGame = document.querySelector('.resetGame');



//********** SELECTS COMPUTER'S CHOICE AND ASSIGNS ACCORDINGLY **********//

function getComputerChoice() {
    const choice = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return choice;
};

let computerSelection = getComputerChoice();


//************************** PLAYER SELECTION **************************//

let playerSelection = "";


const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
        if (checkResults(playerSelection, computerSelection) == "player") {
            playerScore++;
            document.querySelector(".playScore").textContent++;
        } else if (checkResults(playerSelection, computerSelection) == "computer") {
            computerScore++;
            document.querySelector(".compScore").textContent++;
        }     
        confirmWinner();
});


const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
        if (checkResults(playerSelection, computerSelection) == "player") {
            playerScore++;
            document.querySelector(".playScore").textContent++;
        } else if (checkResults(playerSelection, computerSelection) == "computer") {
            computerScore++;
            document.querySelector(".compScore").textContent++;
        }     
        confirmWinner();
});


const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
        if (checkResults(playerSelection, computerSelection) == "player") {
            playerScore++;
            document.querySelector(".playScore").textContent++;
        } else if (checkResults(playerSelection, computerSelection) == "computer") {
            computerScore++;
            document.querySelector(".compScore").textContent++;
        }     
        confirmWinner();
});


//****************** CONFIRMS ROUND WINNER ******************//

function checkResults (playerSelection, computerSelection) {
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


//********** CONFIRMS OVERALL WINNER AND REMOVES/ADDS BUTTONS  **********//

let resetButton = document.createElement("button");

function confirmWinner(){
    if (playerScore == 5) {
        document.querySelector(".winner").textContent = "Player Wins!";
        rockBtn.remove(); scissorsBtn.remove(); paperBtn.remove();
        resetGame.appendChild(resetButton);
        resetButton.textContent = "RESET GAME";
    } else if (computerScore == 5) {
        document.querySelector(".winner").textContent = "Computer Wins!";
        rockBtn.remove(); scissorsBtn.remove(); paperBtn.remove();
        resetGame.appendChild(resetButton);
        resetButton.textContent = "RESET GAME";
    }
};

resetButton.addEventListener('click', () => {
    playerScore = 0;
    document.querySelector(".playScore").textContent = 0;
    computerScore = 0;
    document.querySelector(".compScore").textContent = 0;
    gameButtons.append(rockBtn);
    gameButtons.append(paperBtn);
    gameButtons.append(scissorsBtn);
    resetButton.remove();
    document.querySelector(".winner").textContent = "";
});




//************* AUTO-PLAYS UNTIL PLAYER OR COMPUTER WIN 5 ROUNDS *************//



// function game() {
//     for (let i = 0; i < 100; i++) {

//         const computerSelection = getComputerChoice();
        
//         // console.log(individualRoundResult(playerSelection, computerSelection));

//         for (let x = 0; x < 1; x++) {
//             if (checkResults(playerSelection, computerSelection) == "player") {
//                 playerScore++;
//             } else if (checkResults(playerSelection, computerSelection) == "computer") {
//                 computerScore++;
//             }
//         } if (playerScore == 5) {
//             return console.log("Player Wins!");
//         } else if (computerScore == 5) {
//             return console.log("Computer Wins!");
//         }
//     }
// };


// ****************** DISPLAY INDIVIDUAL ROUND OUTCOMES ****************** //
// [Un-comment the below function & the console.log in 'game()' to view] //


/*
function individualRoundResult(playerSelection, computerSelection) {
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
*/



