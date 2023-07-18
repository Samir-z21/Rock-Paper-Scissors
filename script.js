// Reference to body
const btn = document.querySelector('#buttons');
const buttons = document.querySelectorAll('button');

// Player's Choice
let playerSelection;

// Create counters
let playerCounter = 0;
let cpuCounter = 0;

// Message elements
let playerMessage;
let cpuMessage;
let result;
let score;

// Track if the game has ended 
let gameEnded = false;


// Start Game
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {

    // Flag check 
    if (gameEnded) return;

    // Remove the text for the next round
    if (playerMessage && playerMessage.parentNode === btn) {
        btn.removeChild(playerMessage);
    }
    if (cpuMessage && cpuMessage.parentNode === btn) {
        btn.removeChild(cpuMessage);
    }
    if (result && result.parentNode === btn) {
        btn.removeChild(result);
    }
    if (score && score.parentNode === btn) {
        btn.removeChild(score);
    }
    
    playerSelection = e.target.innerText;

    
    // Run single round result
    result = document.createElement('p');
    result.textContent = singleRound();
    btn.appendChild(result);

    // Display Score
    if (result.textContent.includes("Win")) {
      ++playerCounter;
    } else if (result.textContent.includes("Lose")) {
      ++cpuCounter;
    }

    score = document.createElement('p');
    score.textContent = "Player score: " + playerCounter + " | CPU score: " + cpuCounter;
    btn.appendChild(score);

    // Announce Winner
    const won = document.createElement('p');
    won.textContent = "Congrats! You won the GAME!";
    const lost = document.createElement('p');
    lost.textContent = "Bummer! You lost the GAME!";

    // Play again
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play again";
    playAgain.addEventListener("click", function() {
      location.reload();
    });

    if (playerCounter === 5) {
      btn.appendChild(won);
      btn.appendChild(playAgain);
      gameEnded = true;
      buttons.forEach((button)=> {
        button.disabled = true;
      })
    } else if (cpuCounter === 5) {
      btn.appendChild(lost);
      btn.appendChild(playAgain);
      gameEnded = true;
      buttons.forEach((button)=> {
        button.disabled = true;
      })
    }
  });
});



// Single round of play
function singleRound() {
  const computerSelection = getComputerChoice();

  // Return selections messages
  playerMessage = document.createElement('div');
  playerMessage.textContent = "The Player selected " + playerSelection + ".";

  cpuMessage = document.createElement('div');
  cpuMessage.textContent = "The Computer selected " + computerSelection + ".";

  btn.appendChild(playerMessage);
  btn.appendChild(cpuMessage);

  // Result of the round
  if (playerSelection === computerSelection) {
    return "It's a Draw!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection + ".";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
  } else {
    return "Something went wrong.";
  }
}

// Computer's Choice
function getComputerChoice() {
  
  const arraySelections = ["Rock", "Paper", "Scissors"];

  // Number generator
  const computerChoice = arraySelections[Math.floor(Math.random() * 3)];
  return computerChoice;
}