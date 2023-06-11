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
let playerSelection = (promptAnswer.slice(0,1).toUpperCase() + promptAnswer.slice(1).toLowerCase())

console.log(playerSelection)

// Function for a single round of play // 
function singleRound(playerSelection, computerSelecion) { 
    if (playerSelection === computerSelecion) {
        return "It's a Draw!" 
    } else if (
        (playerSelection === "Rock" && computerSelecion === "Paper") || (playerSelection === "Paper" && computerSelecion === "Scissors") || (playerSelection === "Scissors" && computerSelecion === "Rock")
        ){
        return "You Lose! " + computerSelecion + " beats " + playerSelection
    } else if ( 
        (playerSelection === "Rock" && computerSelecion === "Scissors") ||(playerSelection === "Paper" && computerSelecion === "Rock") ||
        (playerSelection === "Scissors" && computerSelecion === "Paper")
        ){
        return "You Win! " + playerSelection + " beats " + Scissors
    }  else { 
        return "please write correctly"
    }
}

let computerSelecion = getComputerChoice() 
console.log(computerSelecion)
console.log(singleRound(playerSelection, computerSelecion))

