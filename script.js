// Function that picks a random value from the array and returns it //
    function getComputerChoice() {
    let selections = ["Rock", "Paper", "Scissors"]
    let computerSelection = selections[Math.floor(Math.random()* selections.length)];
    return computerSelection
}

// Function for a single round of play //
function singleRound() { 
    // Prompt choice and make customer input case-insensitive // 
    let promptAnswer = prompt ("Rock, Paper, or Scissors? ")
    let playerSelection = (promptAnswer.slice(0,1).toUpperCase() + promptAnswer.slice(1).toLowerCase());

    // Get computer's selection 
    let computerSelection = getComputerChoice(); 

    // To add meaningful replies //
    console.log("The Player selected " + playerSelection + ".");
    console.log("The CPU selected " + computerSelection + "."); 

    // Returning output of the round//
    if (playerSelection === computerSelection) {
        return ("It's a Draw!");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||(playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ){
        return ("You Win! " + playerSelection + " beats " + computerSelection);

    }  else if ( 
        (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")
    ){ 
        return ("You Lose! " + computerSelection + " beats " + playerSelection);

    }   else { 
         return "please type correctly idiot"
    }   

}

// Function for the game //
function game() {
    let cpuCounter = 0;
    let playerCounter = 0;
    // Loop code 5 times 
    for (let i = 0; i < 5; i++) {
        let result = singleRound();

        // Add a socre counter
        if (result.includes("Win")) {
            ++playerCounter;
        } else if (result.includes("Lose")) {
            cpuCounter++;
        }
        
        // return the counter the winner
        console.log(result);
        console.log("Player score: " + playerCounter + " | CPU score: " + cpuCounter);
    }

    // To declare a winner after the game
    if (playerCounter > cpuCounter) {
        return "Player wins the game!";
    } else if (cpuCounter > playerCounter) {
        return "CPU wins the game!";
    } else {
        return "it's a tie!";
    }
}



// Console checks 
console.log(game())





