const board = document.querySelector(".board");
let playerTurn = 0;

const tempArr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const playerTurnHeading = document.querySelector(".playerTurn");

board.addEventListener("click", (e) => {
  if (e.target.textContent.trim() !== "") return;
  uiChange(playerTurn % 2 === 0, e);

});

function changePlayerTurn() {
  playerTurn++;
}

function uiChange(expression, e) {
  if (expression) {
    e.target.textContent = "O";
    e.target.style.color = "blue";
    playerTurnHeading.textContent = `X's turn`;
    backEndLogic(e, e.target.textContent);
    changePlayerTurn();
  } else {
    e.target.textContent = "X";
    e.target.style.color = "red";
    playerTurnHeading.textContent = `O's turn`;
    backEndLogic(e, e.target.textContent);
    changePlayerTurn();
  }
}

function backEndLogic(event, symbol) {
  const id = Number(event.target.id); // "01" -> 1
  const row = Math.floor((id - 1) / 3);
  const col = (id - 1) % 3;

 
  if (tempArr[row][col] !== null) return;

  tempArr[row][col] = symbol;
  console.log(tempArr);

  const winner = checkWinner(tempArr);
  if (winner) {
    playerTurnHeading.textContent = `${winner} wins!`;
  }
}

function checkWinner(b) {
  const lines = [
    // rows
    [b[0][0], b[0][1], b[0][2]],
    [b[1][0], b[1][1], b[1][2]],
    [b[2][0], b[2][1], b[2][2]],
    // cols
    [b[0][0], b[1][0], b[2][0]],
    [b[0][1], b[1][1], b[2][1]],
    [b[0][2], b[1][2], b[2][2]],
    // diagonals
    [b[0][0], b[1][1], b[2][2]],
    [b[0][2], b[1][1], b[2][0]],
  ];

  for (const [a, c, d] of lines) {
    if (a && a === c && a === d) return a; // returns "X" or "O"
  }
  return null;
}


let restartBtn = document.querySelector('button');

restartBtn.addEventListener('click', () => {
    window.location.reload();
});
