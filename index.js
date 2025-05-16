/*
    We are creating the game of rock paper scissors that is to be played in the console.
    A computer vs a human, they play for 5 rounds.
*/

// First logic to get the computer choice, that randomly generates and returns either rock, paper, scissor.
function getComputerChoice() {
    const play_comp = Math.floor(Math.random() * 3);
    
    if (play_comp === 0) {
        return "rock";
    } else if (play_comp === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Second logic to get the human choice
function getHumanChoice() {
    let play_human = prompt("Pick between rock, paper and scissors?");

    // Normalize input: convert to lowercase and trim space
    if (!play_human) {
        console.log("Invalid input. Defaulting to 'rock'.");
        return "rock";
    }

    play_human = play_human.toLowerCase().trim();
    
    if (play_human === "rock" || play_human === "paper" || play_human === "scissors") {
        return play_human;
    } else {
        console.log("Invalid input. Defaulting to 'rock'.");
        return "rock";
    }
}

// Players score variables - changed from const to let so they can be updated
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
    // Make input case insensitive (though getHumanChoice already does this)
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// Play the game for 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`)
        playRound(humanChoice, computerChoice);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
    }
    
    // Final result
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();