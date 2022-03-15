//  0) Declare variables such as 'cpuAns', 'userAns', and any others as needed.

let cpuAns;
let userAns;
let cpuWins = 0;
let userWins = 0;
let cpuRounds = 0;
let userRounds = 0;
let drawRounds = 0;
let roundNumber = 1;

//  Repeat process through end of Round 5

while(roundNumber <= 5) {

//  1) CPU generates 'Rock', 'Paper', or 'Scissors' at random

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



//  2) Prompt user to enter 'Rock', 'Paper, or 'Scissors'. Make this field case insensitive.

userAns = prompt("Rock, Paper, or Scissors?");
console.log("User guessed '" + userAns + "'");
console.log("CPU guessed '" + cpuAns + "'")

//  3) Enforce case insensitivity for comparision.

userAns.toLowerCase();
cpuAns.toLowerCase();

//  4) Compare cpuAns and userAns.

if (userAns == null) {
    prompt("Refresh and try again!");
} else if (userAns === cpuAns) {
    console.log("Draw!");
} else if (userAns === "Rock" && cpuAns === "Scissors" || userAns === "Paper" && cpuAns === "Rock" || userAns === "Scissors" && cpuAns === "Paper") {
    console.log("User Wins Round " + roundNumber + "!");
    userWins++;
} else {
    console.log("CPU Wins Round " + roundNumber + "!");
    cpuWins++;
}

roundNumber++;

}

//      if cpuAns = userAns, return 'Draw'

//      else if cpuAns = 'Rock' & userAns = 'Paper', return 'User Wins'
//      else if userAns = 'Scissors', return 'CPU Wins'

//      else if cpuAns = 'Paper' & userAns = 'Scissors', return 'User Wins'
//      else if userAns = 'Rock', return 'CPU Wins'

//      else if cpuAns = 'Scissors' & userAns = 'Rock', return 'User Wins'
//      else if userAns = 'Paper', return 'CPU Wins'

//  4) Tally results


    
    
if(cpuWins === userWins) {
    console.log("Draw!");
} else if(cpuWins > userWins) {
    console.log("CPU Wins!");
} else {
    console.log("User Wins!");
}

//  5) Compare results

//      if cpuWins > userWins, return 'CPU Wins'
//      else, return 'User Wins'
//      increment roundCount + 1

//  6) Start next round unless roundCount = 5
//      else tally total roundWins for both CPU & User

//  7) Compare total roundWins and declare winner

//  8) Would you like to play again?