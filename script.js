
// First get all necessary DOM nodes
const scorePlayer = document.querySelector("#play-score");
const scoreComputer = document.querySelector("#comp-score");
const message = document.querySelector(".message");
const icons = Array.from(document.querySelectorAll(".images"));
const endAlert = document.querySelector("#end-alert");
const endText = document.querySelector(".game-end-text");
const resetButton = document.querySelector("button");

// Declare variables to use
let playerScore = 0;
let computerScore = 0;

window.addEventListener('load', () => {
    endAlert.classList.remove('show-up');
})

// Start game when icon is clicked
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        let playerSelect = icon.dataset.image;
        playGame(playerSelect);

    });
});

// Main game logic
function playGame(playerSelect) {
    let playerSelection = playerSelect.toLowerCase();
    let computerSelection = computerPlay();
    let roundResult = playOneRound(playerSelection, computerSelection);

    checkRoundResult(roundResult);
    scoreComputer.textContent = `${computerScore}`;
    scorePlayer.textContent = `${playerScore}`;
    message.textContent = `${roundResult}`;

    if (playerScore >= 5 && computerScore < 5) {
        endText.textContent = 'You\'ve won this battle!';
        endAlert.classList.toggle('show-up')
    } else if (playerScore < 5 && computerScore >= 5) {
        endText.textContent = 'You\'ve lost this battle';
        endAlert.classList.toggle('show-up');
    }  
};

// Function using If statements and switch to get one round result
function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
          case 'paper':
            return 'You Lose! Paper beats Rock';
            break;
          case 'scissors':
            return 'You Win! Rock beats Scissors';
            break;
          default:
            return "It's a Tie! Play one more round";
            break;
        }
      } else if (playerSelection === 'paper') {
        switch (computerSelection) {
          case 'scissors':
            return 'You Lose! Scissors beats Paper';
            break;
          case 'rock':
            return 'You Win! Paper beats Rock';
            break;
          default:
            return "It's a Tie! Play one more round";
            break;
        }
      } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
          case 'rock':
            return 'You Lose! Rock beats Scissors';
            break;
          case 'paper':
            return 'You Win! Scissors beats Paper';
            break;
          default:
            return "It's a Tie! Play one more round";
            break;
        }
      }
};

// Helper functions
function computerPlay() {
    const elements = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * elements.length);
    return elements[random];
};

function checkRoundResult(result) {
  if (result.search('You Win!') > -1) {
    playerScore++;
  } else if (result.search('You Lose!') > -1) {
    computerScore++;
  }
};

resetButton.addEventListener('click', () => {
    window.location.reload();
});