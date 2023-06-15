// Computer's Choice 
function getComputerChoice () {

    // An array of values
    let arraySelctions = ["Rock", "Paper", "Scissors"];

    // Number generator
    let computerChoice = arraySelctions[Math.floor(Math.random() * 3)];
    return computerChoice 
}


// Single round of play
function singleRound () {

    let computerSelection = getComputerChoice()

    // Prompt for player's selection
    let playerInput = prompt("Rock, Paper, or Scissors?")

    // Make player input case-insensitive
    let playerSelection = playerInput.slice(0,1).toUpperCase() + playerInput.slice(1).toLowerCase()

    // Return selections messages 
    console.log("The Player selected " + playerSelection + ".")
    console.log("The Computer selected " + computerSelection + ".")
   

    // Result of the round
    if (playerSelection === computerSelection) {
        return "It's a Draw!"
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection + "."
    } else if (
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock"
    ) { 
        return "You Lose! " + computerSelection + " beats " + playerSelection + "."
    } else {
        return "type correctly idiot."
    }
}

 
function game () {
    
    // Create counters
    let playerCounter = 0;
    let cpuCounter = 0;

    // Create for loop
    for (let i = 0; i < 5; i++) {
         let rounds = singleRound();
        
    // Update and return results
    if (rounds.includes("Win"))
    {
        ++playerCounter

    } else if (rounds.includes("Lose")) {

        ++cpuCounter
    }

    // Return round winner
    console.log(rounds);
    console.log("Player score: " + playerCounter + " | CPU score: " + cpuCounter);
}

// Declare winner after the game
if (playerCounter > cpuCounter) {
    return "Player wins the game!";
} else if (cpuCounter > playerCounter) {
    return ("Computer wins the game!")
} else {
    return "It's a tie"
}
}


// Console checks
console.log(game())