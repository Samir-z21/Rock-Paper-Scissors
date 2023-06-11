// Function that picks a random value from the array and returns it //
    function getComputerChoice() {

    // Array containing desired values //
    let selections = ["Rock", "Paper", "Scissors"]

    // Genereting a value from the array at random and returning it //
    let computerSelecion = selections[Math.floor(Math.random()* selections.length)];
    return computerSelecion
}

// Makes customer input case-insensitive //   
let promptAnswer = prompt ("Rock, Paper or Scissors? ")
let playerSelection = promptAnswer.toLowerCase()

console.log(playerSelection)

function singleRound(playerSelection, computerSelecion) {
    if (playerSelection === "rock" && computerSelecion === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelecion === "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "rock" && computerSelecion === "Rock") {
        return "It's a Draw!"
    } else if (playerSelection === "paper" && computerSelecion === "Paper") {
        return "It's a Draw"
    } else if (playerSelection === "paper" && computerSelecion === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "paper" && computerSelecion === "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelecion === "Paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelecion === "Scissors") {
        return "It's a Draw" 
    } else if (playerSelection === "scissors" && computerSelecion === "Rock") {
        return "You Lose! Rock beats scissors"
    } else return "please write correctly"
}

let computerSelecion = getComputerChoice() 
console.log(computerSelecion)
console.log(singleRound(playerSelection, computerSelecion))

