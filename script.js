
//  1) Declare variables such as 'cpuAns', 'userAns', and any others as needed.

let cpuAns;
let userAns;
let resetDecision = "y";
let cpuWins = 0;
let userWins = 0;
let cpuRounds = 0;
let userRounds = 0;
let roundNumber = 1;


function playRound(userAns, cpuAns) {
	
	console.log("Round " + roundNumber);
	alert("Round " + roundNumber);

//  2) CPU generates 'Rock', 'Paper', or 'Scissors' at random

    function computerPlay() {
        let x = Math.random()*100;
        if (x <= 32) {
            return cpuAns = "Rock";
        } else if (x <= 66) { 
            return cpuAns = "Paper";
        } else if (x <= 99) {
            return cpuAns = "Scissors";
        }
    
    }

    computerPlay();

//  3) Prompt user to enter 'Rock', 'Paper, or 'Scissors'.

    userAns = prompt("Rock, Paper, or Scissors?");
	
	console.log("User guessed '" + userAns + "'");
	console.log("CPU guessed '" + cpuAns + "'");

	alert("User guessed '" + userAns + "'");
	alert("CPU guessed '" + cpuAns + "'");

//  4) Enforce case insensitivity for comparision.

	userAns = userAns.toLowerCase();
	cpuAns = cpuAns.toLowerCase();

//  4) Compare cpuAns and userAns. Declare win, lose, or draw. Tally results. Move to next round.

	if (userAns === cpuAns) {
    		console.log("Round " + roundNumber + ": Draw!");
			alert("Round " + roundNumber + ": Draw!     CPU: " + cpuWins + " :: User: " + userWins);
	} else if (userAns === "rock" && cpuAns === "scissors" || userAns === "paper" && cpuAns === "rock" || userAns === "scissors" && cpuAns === "paper") {
			userWins++;
    		console.log("Round " + roundNumber + ": User Wins!");
			alert("Round " + roundNumber + ": User Wins!     CPU: " + cpuWins + " :: User: " + userWins);

	} else if (cpuAns === "rock" && userAns === "scissors" || cpuAns === "paper" && userAns === "rock" || cpuAns === "scissors" && userAns === "paper")	{
			cpuWins++;
    		console.log("Round " + roundNumber + ": CPU Wins!");
			alert("Round " + roundNumber + ": CPU Wins!     CPU: " + cpuWins + " :: User: " + userWins);    		
	} else {
		alert("User entry error.");
		roundNumber = 6;
	}

	roundNumber++;

}

//  5) Compare total wins and declare winner.

function declareWinner() {

	if (cpuWins === userWins) {
		console.log("Final Result: Draw!");
	 alert("Final Result: Draw!");
	} else if (cpuWins > userWins) {
	 console.log("Final Result: CPU Wins!");
	 alert("Final Result: CPU Wins!");
	} else {
	 console.log("Final Result: User Wins!");
	 alert("Final Result: User Wins!");
	}

}

// 6) Repeat through end of round 5.

function game() {

	while (roundNumber <= 5) {
		playRound();
		}

	if (roundNumber = 6) {
		declareWinner();
	}

	if (roundNumber > 6) {
		alert("Refresh and try again.")
	}

}

// 7) Reset values if user wants to play again.

function reset() {
	
	cpuWins = 0;
	userWins = 0;
	cpuRounds = 0;
	userRounds = 0;
	roundNumber = 1;

}

// 8) Concluding while loop runs above function and represents one complete iteration of the game.

while(resetDecision === "y") {

	game();

	resetDecision = prompt("Would you like to play again?  Y/N");

	let resetDecisionL = resetDecision.toLowerCase();

	if (resetDecisionL === "y") {
		reset();
	} else {
		alert("Come back soon!");
	}

}