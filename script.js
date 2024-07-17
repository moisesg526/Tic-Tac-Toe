const mainContainer = document.querySelector(".main-container");
const grid = document.querySelector(".grid");
mainContainer.appendChild(grid);

function boardGame() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

boardGame();
