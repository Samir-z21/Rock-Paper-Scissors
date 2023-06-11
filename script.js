// Array containing desired values//
let selections = ["Rock", "Paper", "Scissors"]

// Function that picks a random value from the previous array and returns it //
function getComputerChoice() {
    return selections[Math.floor(Math.random()* selections.length)]
}

console.log(getComputerChoice())


