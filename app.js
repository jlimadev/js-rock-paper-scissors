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
    alert(`Invalid choice! ${DEFAULT_CHOICE} was defined`);
    return;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  return randomValue < 0.34
    ? ROCK_CHOICE
    : randomValue < 0.67
    ? PAPER_CHOICE
    : SCISSORS_CHOICE;
};

const getWinner = (computerChoice, playerChoice = DEFAULT_CHOICE) =>
  computerChoice === playerChoice
    ? RESULT_DRAW
    : (playerChoice === ROCK_CHOICE && computerChoice === SCISSORS_CHOICE) ||
      (playerChoice === SCISSORS_CHOICE && computerChoice === PAPER_CHOICE) ||
      (playerChoice === PAPER_CHOICE && computerChoice === ROCK_CHOICE)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (isPlaying) {
    return;
  } else {
    isPlaying = true;
    console.log("The game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = playerChoice ? getWinner(computerChoice, playerChoice) : getWinner(computerChoice);
    let message = `You picked ${playerChoice || DEFAULT_CHOICE} and computer picked ${computerChoice}, so `;
    
    message =
      winner === RESULT_DRAW
        ? message + "it is a draw"
        : winner === RESULT_PLAYER_WINS
        ? message + "you won!"
        : message + "you lost!";
    alert(message);
    console.log(`Winner: ${winner}`);
    isPlaying = false;
  }
});
