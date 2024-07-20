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

function player(name) {
  return {
    player: name,
    function() {
      return `${this.name}`;
    },
  };
}

let player1Prompt = prompt("Player 1 enter your name");
let player2Prompt = prompt("Player 2 enter your name");
const player1 = player(JSON.stringify(player1Prompt));
const player2 = player(JSON.stringify(player2Prompt));

(function displayPlayersName() {
  const displayPlayer1 = document.createElement("h2");
  displayPlayer1.classList.add("player-1");
  displayPlayer1.innerText = player1;
  console.log(displayPlayer1);
  mainContainer.appendChild(displayPlayer1);
})();

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
