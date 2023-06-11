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



