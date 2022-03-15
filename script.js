//  0) Declare variables such as 'cpuAns', 'userAns', and any others as needed.

let cpuAns;
let userAns;
let cpuWins = 0;
let userWins = 0;
let cpuRounds = 0;
let userRounds = 0;
let drawRounds = 0;
let roundNumber = 1;

function playRound(userAns, cpuAns) {
	
    function computerPlay() {               //  1) CPU generates 'Rock', 'Paper', or 'Scissors' at random
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

    userAns = prompt("Rock, Paper, or Scissors?");          //  2) Prompt user to enter 'Rock', 'Paper, or 'Scissors'.
	
	console.log("User guessed '" + userAns + "'");
	console.log("CPU guessed '" + cpuAns + "'");
	
	userAns.toLowerCase();                                  //  3) Enforce case insensitivity for comparision.
	cpuAns.toLowerCase();
    
    if (userAns == null) {
    		prompt("Refresh and try again!");               //  4) Compare cpuAns and userAns.
	} else if (userAns === cpuAns) {                        //  5) Tally results
    		console.log("Round " + roundNumber + ": Draw!");
	} else if (userAns === "Rock" && cpuAns === "Scissors" || userAns === "Paper" && cpuAns === "Rock" || userAns === "Scissors" && cpuAns === "Paper") {
    		console.log("Round " + roundNumber + ": User Wins!");
    		userWins++;
	} else {
    		console.log("Round " + roundNumber + ": CPU Wins!");
    		cpuWins++;
	}

	roundNumber++;

	}


function game() {

	while(roundNumber <= 5) {                               //  6) Repeat through end of Round 5
		playRound();
		}

	if(cpuWins === userWins) {                              //  7) Compare total wins and declare winner
    		console.log("Final Result: Draw!");
	} else if(cpuWins > userWins) {
    		console.log("Final Result: CPU Wins!");
	} else {
    		console.log("Final Result: User Wins!");
	}

	}

game();