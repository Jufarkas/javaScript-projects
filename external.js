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

// game();
// console.log("Player final score: " + playerScore);
// console.log("Computer final score: " + computerScore);


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


function confirmWinner(){
    if (playerScore == 5) {
        document.querySelector(".winner").textContent = "Player Wins!";
    } else if (computerScore == 5) {
        document.querySelector(".winner").textContent = "Computer Wins!";
    }
};


//************* PLAYS UNTIL PLAYER OR COMPUTER WIN 5 ROUNDS *************//



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


//******** SIMPLISTIC FUNCTION TO RETURN "WINNER" FOR EACH game() ********//

// function confirmWinner(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         return "tie";
//     } else if (
//         playerSelection == "rock" && computerSelection == "scissors" || 
//         playerSelection == "paper" && computerSelection == "rock" || 
//         playerSelection == "scissors" && computerSelection == "paper") {
//         return "player";
//     } else {
//         return "computer";
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



