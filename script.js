const mainContainer = document.querySelector(".main-container");
const grid = document.querySelector(".grid");
mainContainer.appendChild(grid);

function boardGame() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      count++;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", count);
      grid.appendChild(cell);
    }
  }
}

boardGame();

function players(name) {
  return {
    player() {
      return alert(`Hello ${name}`);
    },
  };
}

function win() {
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
}

const player1 = players("Playet 1 is X");
const player2 = players("Player 2 is Y");

player1.player();
player2.player();
