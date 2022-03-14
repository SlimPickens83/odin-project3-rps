//  0) Declare variables such as 'cpuAns', 'userAns', and any others as needed.

//  1) CPU generates 'Rock', 'Paper', or 'Scissors' at random

//  2) Prompt user to enter 'Rock', 'Paper, or 'Scissors'. Make this field case insensitive.

//  3) Compare cpuAns and userAns.

//      if cpuAns = userAns, return 'Draw'

//      else if cpuAns = 'Rock' & userAns = 'Paper', return 'User Wins'
//      else if userAns = 'Scissors', return 'CPU Wins'

//      else if cpuAns = 'Paper' & userAns = 'Scissors', return 'User Wins'
//      else if userAns = 'Rock', return 'CPU Wins'

//      else if cpuAns = 'Scissors' & userAns = 'Rock', return 'User Wins'
//      else if userAns = 'Paper', return 'CPU Wins'

//  4) Tally results

//  5) Compare results

//      if cpuWins > userWins, return 'CPU Wins'
//      else, return 'User Wins'
//      increment roundCount + 1

//  6) Start next round unless roundCount = 5
//      else tally total roundWins for both CPU & User

//  7) Compare total roundWins and declare winner

//  8) Would you like to play again?