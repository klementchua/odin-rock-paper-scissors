function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // Check they are different, Compare pairwise, then increment winner
    if (humanChoice !== computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You win this round.");
        } else {
            computerScore ++;
            console.log("You lose this round.");
        }
    } else {
        console.log("Tie!")
    }
}

function playGame(rounds) {
    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}!`);
        console.log(`You: [${humanScore}] : Computer: [${computerScore}]`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    determineWinner(humanScore, computerScore)
}

function determineWinner(human, computer) {
    if (human === computer) {
        console.log(`Tie at ${humanScore}:${computerScore}!`);
    } else if (human > computer) {
        console.log(`You win ${humanScore}:${computerScore}! :D`);
    } else {
        console.log(`You lose ${humanScore}:${computerScore}! :(`);
    }
}


let humanScore = 0;
let computerScore = 0;
playGame(5)