const startGameBtn = document.getElementById("start-game-btn");
let isPlaying = false;

const ROCK_CHOICE = "ROCK";
const PAPER_CHOICE = "PAPER";
const SCISSORS_CHOICE = "SCISSORS";
const DEFAULT_CHOICE = ROCK_CHOICE;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK_CHOICE}, ${PAPER_CHOICE} or ${SCISSORS_CHOICE}?`,
    ""
  ).toUpperCase();
  if (
    selection !== ROCK_CHOICE &&
    selection !== PAPER_CHOICE &&
    selection !== SCISSORS_CHOICE
  ) {
    console.log(selection);
    alert(`Invalid choice! ${DEFAULT_CHOICE} was defined`);
    return DEFAULT_CHOICE;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK_CHOICE;
  } else if (randomValue < 0.67) {
    return PAPER_CHOICE;
  } else {
    return SCISSORS_CHOICE;
  }
};

const getWinner = (computerChoice, playerChoice) => {
  isPlaying = false;
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    playerChoice === ROCK_CHOICE && computerChoice === SCISSORS_CHOICE ||
    playerChoice === SCISSORS_CHOICE && computerChoice === PAPER_CHOICE ||
    playerChoice === PAPER_CHOICE && computerChoice === ROCK_CHOICE
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function startGame() {
  if (isPlaying) {
    return;
  }

  isPlaying = true;
  console.log("The game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(`Player selection: ${playerSelection}`);
  const computerSelection = getComputerChoice();
  console.log(`Computer selection: ${computerSelection}`);
  const winner = getWinner(computerSelection, playerSelection);
  console.log(`Winner: ${winner}`);
});
