/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScore = { computerScore: 0, playerScore: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    let score;
    return (score = 0);
  }

  // All situations where human wins, set `score` to 1
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    return (score = 1);
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    return (score = 1);
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    return (score = 1);
  }
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }
  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
const resultDiv = document.getElementById("result");
const handsDiv = document.getElementById("hands");
const playerScoreDiv = document.getElementById("palyer-score");
function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    resultDiv.innerHTML = "You lose";
  } else if (score == 0) {
    resultDiv.innerHTML = "Its a tie";
  } else {
    resultDiv.innerHTML = "You win!!!";
  }
  handsDiv.innerHTML = `${playerChoice} vs ${computerChoice}`;
  playerScoreDiv.innerHTML = totalScore["playerScore"];
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
