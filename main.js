const choices = ["Rock", "Paper", "Scissors"];
const display = document.querySelector(".display");
const playerDisplay = document.querySelector("#player-score");
const cpuDisplay = document.querySelector("#cpu-score");
let playerScore = 0;
let cpuScore = 0;

function cpuPlay() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playGame(choice) {
  if (playerScore >= 5 || cpuScore >= 5) {
    return;
  }

  let cpu = cpuPlay();
  let result = "The computer played ";

  switch (choice) {
    case "Rock":
      switch (cpu) {
        case "Rock":
          result += "Rock. Tie game.";
          break;
        case "Paper":
          result += "Paper. You lost.";
          cpuScore++;
          break;
        case "Scissors":
          result += "Scissors. You won!";
          playerScore++;
          break;
      }
      break;
    case "Paper":
      switch (cpu) {
        case "Rock":
          result += "Rock. You won!";
          playerScore++;
          break;
        case "Paper":
          result += "Paper. Tie game.";
          break;
        case "Scissors":
          result += "Scissors. You lost.";
          cpuScore++;
          break;
      }
      break;
    case "Scissors":
      switch (cpu) {
        case "Rock":
          result += "Rock. You lost.";
          cpuScore++;
          break;
        case "Paper":
          result += "Paper. You won!";
          playerScore++;
          break;
        case "Scissors":
          result += "Scissors. Tie game.";
          break;
      }
      break;
  }

  if (playerScore >= 5) {
    result += " Congratulations! You have won the match.";
  }
  if (cpuScore >= 5) {
    result += " Sorry, you have lost the match. Please try again!";
  }

  display.textContent = result;
  playerDisplay.textContent = "Player: " + playerScore.toString();
  cpuDisplay.textContent = "CPU: " + cpuScore.toString();

  return result;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playGame(e.target.dataset.choice);
  });
});
