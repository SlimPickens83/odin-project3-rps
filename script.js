let cpuAns;
let userAns;
let resetDecision = "y";
let cpuWins = 0;
let userWins = 0;
let drawCount = 0;
let roundNumber = 1;

const buttons = document.querySelectorAll('button');

const scoreboard = document.getElementById("Scoreboard");
const round = document.getElementById("Round");
const user = document.getElementById("User");
const cpu = document.getElementById("CPU");
const userGuess = document.getElementById("userGuess");
const cpuGuess = document.getElementById("cpuGuess");
const winner = document.getElementById("Winner");
const draw = document.getElementById("Draw");

const resetButton = document.createElement('button');


buttons.forEach((button) => {
	button.addEventListener('click', () => 
	{
		userAns = button.id;

		if (userWins !== 5 && cpuWins !== 5) {
			playRound();			
		}
	});
});

function playRound() {	
	round.textContent = `Round: ${roundNumber}`;

	computerPlay();

	userGuess.textContent = `User guessed: ${userAns}`;
	cpuGuess.textContent = `CPU guessed: ${cpuAns}`;

	if (userAns === cpuAns) {
		drawCount++;
	} else if ((userAns === "Rock" && cpuAns === "Scissors") || (userAns === "Paper" && cpuAns === "Rock") || (userAns === "Scissors" && cpuAns === "Paper")) {
		userWins++;
	} else {
		cpuWins++;
	}

	roundNumber++;

	user.textContent = `User: ${userWins}`;
	cpu.textContent = `CPU: ${cpuWins}`;
	draw.textContent = `Draws: ${drawCount}`;

	if (userWins === 5 || cpuWins === 5) {
		declareWinner();
	}

}

function computerPlay() {
	let x = Math.random()*100;
	if (x <= 32) {
		cpuAns = "Rock";
	} else if (x <= 66) { 
		cpuAns = "Paper";
	} else if (x <= 99) {
		cpuAns = "Scissors";
	}
}    

function declareWinner() {
	if (cpuWins === 5) {
		winner.textContent = "Winner: CPU";
	} else {
		winner.textContent = "Winner: User";
	}
}
