// Computer's Choice 
function getComputerChoice () {

    // An array of values
    let arraySelctions = ["Rock", "Paper", "Scissors"];

    // Number generator
    let computerChoice = arraySelctions[Math.floor(Math.random() * 3)];
    return computerChoice 
}

// Reference to body
const btn = document.querySelector('#buttons');
const buttons = document.querySelectorAll('button');

// Player's Choice
let playerSelection; 

buttons.forEach((button) => {
 button.addEventListener('click', function(e) {

   playerSelection = (e.target.innerText);

   // Return result
   const result = document.createElement ('div'); 
   result.textContent = (singleRound());

   btn.appendChild(result)
})
})


// Single round of play
function singleRound () {

    let computerSelection = getComputerChoice()

    // Return selections messages 
    const playerMessage = document.createElement ('div');
    playerMessage.textContent = "The Player selected " + playerSelection + "."

    const cpuMessage = document.createElement ('div');
    cpuMessage.textContent = "The Computer selected " + computerSelection + "." 
    
    btn.appendChild(playerMessage)
    btn.appendChild(cpuMessage)

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
        return "fix it idiot."
    }

    
}

 
/*function game () {
    
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
*/

// Console checks
