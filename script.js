'use strict';

const div = document.querySelector('#choices');
const scores = document.querySelector('#scores');
const result = document.querySelector('#result');
const roundsPara = document.querySelector('.rounds');
let round = 1;

div.addEventListener('click', playGame);

function playGame(e) {
	playRound(e.target.textContent.toLowerCase(), getComputerChoice());
}

const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0,
	computerScore = 0;

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		result.textContent = "It's a tie!";
	} else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
		result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
		++humanScore;
	} else {
		result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
		++computerScore;
	}

	scores.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

	if (computerScore >= 5 || humanScore >= 5) endGame();
	else {
		round++;
		roundsPara.textContent = `Round ${round}. First to five wins!`;
	}
}

function endGame() {
	result.textContent = humanScore > computerScore ? 'Yay! You win!' : 'You lost! Womp womp!!';
	div.removeEventListener('click', playGame);

	const para = document.createElement('p');
	para.textContent = 'Do you wish to restart?';

    const myDiv = document.createElement('div')

	const restartBtn = document.createElement('button');
	restartBtn.textContent = 'Restart';
	restartBtn.addEventListener('click', () => {
		div.addEventListener('click', playGame);
		humanScore = 0;
		computerScore = 0;
		result.textContent = '';
        scores.textContent = ''
        document.body.removeChild(myDiv)

		round = 1;
		roundsPara.textContent = `Round ${round}. First to five wins!`;
	});

    myDiv.appendChild(para)
    myDiv.appendChild(restartBtn)
	document.body.appendChild(myDiv);
}
