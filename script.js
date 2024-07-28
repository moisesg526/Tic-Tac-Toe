const mainContainer = document.querySelector(".main-container");
const grid = document.querySelector(".grid");
mainContainer.appendChild(grid);
let playerOneInput = [];
let playerTwoInput = [];
let winningCombinations = [
  "1, 2, 3",
  "4, 5, 6",
  "7, 8, 9",
  "1, 4, 7",
  "2, 5, 8",
  "3, 6, 9",
  "1, 5, 9",
  "3, 5, 7",
];

(function boardGame() {
  let count = 0;
  //   let turn = 0;
  let playerTurn = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //   count++;
      playerTurn = !playerTurn;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", count);
      grid.appendChild(cell);

      (function playGame() {
        cell.addEventListener("click", () => {
          //   turn++;

          if (playerTurn === true) {
            cell.textContent = "X";
            playerOneInput.push(cell.id);
            playerTurn = !playerTurn;
            console.log(`Player 1: ${playerOneInput}`);
          } else {
            cell.textContent = "O";
            playerTwoInput.push(cell.id);
            playerTurn = !playerTurn;
            console.log(`Player 2: ${playerTwoInput}`);
          }
        });
      })();
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

function checkForWin(x, o, win) {
  if (x.length !== win.length) return false;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== win[i]) return false;
  }
  return true;
}

function win() {
  playerOneInput.sort((a, b) => a - b);
  playerTwoInput.sort((a, b) => a - b);
  for (let i = 0; i < winningCombinations.length; i++) {
    if (checkForWin(playerOneInput, winningCombinations[i])) {
      console.log("Player 1 wins");
      return;
    }
  }
}

function resetGame() {
  playerOneInput = [];
  playerTwoInput = [];
}
