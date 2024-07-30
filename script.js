const mainContainer = document.querySelector(".main-container");
const grid = document.querySelector(".grid");
mainContainer.appendChild(grid);

let playerOneInput = [];
let playerTwoInput = [];
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

(function boardGame() {
  let playerTurn = false;

  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", i);
    grid.appendChild(cell);

    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        if (playerTurn) {
          cell.textContent = "X";
          playerOneInput.push(parseInt(cell.id));
          playerTurn = false;
        } else {
          cell.textContent = "O";
          playerTwoInput.push(parseInt(cell.id));
          playerTurn = true;
        }
        console.log(`Player 1: ${playerOneInput}`);
        console.log(`Player 2: ${playerTwoInput}`);
        win();
      }
    });
  }

  function win() {
    playerOneInput.sort((a, b) => a - b);
    playerTwoInput.sort((a, b) => a - b);

    function isWinningCombination(playerInput, winningCombination) {
      return winningCombination.every((number) => playerInput.includes(number));
    }

    for (let i = 0; i < winningCombinations.length; i++) {
      if (isWinningCombination(playerOneInput, winningCombinations[i])) {
        console.log("Player 1 wins");
        resetGame();
        return;
      } else if (isWinningCombination(playerTwoInput, winningCombinations[i])) {
        console.log("Player 2 wins!");
        resetGame();
        return;
      }
    }
  }
})();

let player1Prompt = prompt("Player 1 enter your name");
let player2Prompt = prompt("Player 2 enter your name");

function playersName(name) {
  return {
    player() {
      return name;
    },
  };
}

let player1 = playersName(player1Prompt);
let player2 = playersName(player2Prompt);

(function displayPlayersName() {
  const displayPlayer1 = document.createElement("h2");
  displayPlayer1.innerText = `Player 1: ${player1.player()} (X)`;
  mainContainer.appendChild(displayPlayer1);
  const displayPlayer2 = document.createElement("h2");
  displayPlayer2.innerText = `Player 2: ${player2.player()} (O)`;
  mainContainer.appendChild(displayPlayer2);
})();

function resetGame() {
  playerOneInput = [];
  playerTwoInput = [];
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.textContent = "";
  });
  console.log("Game has been reset!");
}
