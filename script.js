// Function that picks a random value from the array and returns it //
    function getComputerChoice() {
    let selections = ["Rock", "Paper", "Scissors"]
    let computerSelecion = selections[Math.floor(Math.random()* selections.length)];
    return computerSelecion
}

// Makes customer input case-insensitive //   
let promptAnswer = prompt ("Rock, Paper or Scissors? ")
let playerSelection = (promptAnswer.slice(0,1).toUpperCase() + promptAnswer.slice(1).toLowerCase())

// Function for a single round of play //
function singleRound(playerSelection, computerSelecion) { 
    if (playerSelection === computerSelecion) {
        return ("It's a Draw!") 
    } else if (
        (playerSelection === "Rock" && computerSelecion === "Paper") || (playerSelection === "Paper" && computerSelecion === "Scissors") || (playerSelection === "Scissors" && computerSelecion === "Rock")
        ){
        return ("You Lose! " + computerSelecion + " beats " + playerSelection)
    } else if ( 
        (playerSelection === "Rock" && computerSelecion === "Scissors") ||(playerSelection === "Paper" && computerSelecion === "Rock") ||
        (playerSelection === "Scissors" && computerSelecion === "Paper")
        ){
        return ("You Win! " + playerSelection + " beats " + computerSelecion)
    }  else { 
        return "please type correctly idiot"
    }
}

let computerSelecion = getComputerChoice() 
// To add meaningful replies //
let playerMessage = "You selected " + playerSelection + "." ;
let cpuMessage = "The CPU selected " + computerSelecion + ".";







// Console checks //
console.log(playerMessage)
console.log(cpuMessage)
console.log(singleRound(playerSelection, computerSelecion))



