const board = document.querySelector(".board");
let playerTurn = 0;
const tempArr = [
    [,,,],
    [,,,],
    [,,,]
];

tempArr.forEach(item => console.log(item));
const playerTurnHeading = document.querySelector(".playerTurn");
board.addEventListener('click', (e) => {
    if (playerTurn % 2 === 0) {
        e.target.textContent = "O";
        e.target.style.color = 'blue'
        playerTurnHeading.textContent = `X's turn`;
        changePlayerTurn();

    } else {
        e.target.textContent = "X";
        e.target.style.color = "red";
        playerTurnHeading.textContent = `O's turn`;
        changePlayerTurn();
    }
    
});


function changePlayerTurn() {
    playerTurn++;
}



