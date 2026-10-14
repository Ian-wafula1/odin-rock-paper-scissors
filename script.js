'use strict';

const choices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;  

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    const choice = prompt("Choose between rock, paper and scissors")?.trim()?.toLowerCase();
    if (!choices.includes(choice)) {
        alert("Invalid choice!")
        return getHumanChoice()
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice)
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        ++humanScore
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        ++computerScore
    }
}

function playGame() {
    humanScore = 0, computerScore = 0;  

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`)
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore}  |  Computer score: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie!");
    }

    confirm("One more round?") ? playGame(): alert("Thanks for playing!");
}
