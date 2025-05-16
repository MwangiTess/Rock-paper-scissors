/*
    We are creating the game of rock paper scissors that is to be played in the console.
    A computer vs a human, they play for 5 rounds.
*/

// First logic to get the computer choice, that randomly generates and returns  either rock, paper, scissor.

function getComputerChoice() {
    const play = Math.floor(Math.random() * 3);
    //  it should return rock, paper, scissors.

    if (play === 0) {
        return "rock";
    } else if (play === 1) {
        return "paper";
    } else 
    return "scissors"
}

console.log(getComputerChoice());
