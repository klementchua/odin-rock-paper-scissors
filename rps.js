const currentRound = document.querySelector("#currentRound");
currentRound.textContent = "The results of the current round will be displayed here.";
const results = document.querySelector("#results");
results.textContent = "SCORE | You: 0 | Computer: 0";
const btns = document.querySelector("#btns");

let humanScore = 0;
let computerScore = 0;

btns.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
    updateScore();
    })


function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(humanChoice, computerChoice) {
    // Check they are different, Compare pairwise, then increment winner
    if (humanChoice !== computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            // currentRound.textContent = `You win! ${humanChoice.toTitleCase()} beats ${computerChoice}.`;
        } else {
            computerScore ++;
            // currentRound.textContent = `You lose. ${computerChoice.toTitleCase()} beats ${humanChoice}.`;
        }
    } else {
        currentRound.textContent = "Tie.";
    }
}

function updateScore() {
    results.textContent = `SCORE | You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        results.textContent += `. You win!`
    } else if (computerScore === 5) {
        results.textContent += `. You lose. :(`
    }
}