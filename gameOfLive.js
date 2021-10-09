//GAME OF LIVE

//1r crear tablero.
let board = [];
function createBoard(cells) {
  for (let i = 0; i < cells; i++) {
    board.push([]);
    for (let j = 0; j < cells; j++) {
      board[i].push(0);
    }
  }
  return board;
}

board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

//2-Analizar en que posicion esta cada elemento
function boardPosition(currentBoard) {
  let newBoard = [];
  for (let i = 0; i < currentBoard.length; i++) {
    newBoard.push([]);
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (i === 0 && j === 0) {
        newBoard[i].push(1);
      } else if (i === 0 && j === currentBoard[i].length - 1) {
        newBoard[i].push(2);
      } else if (
        i === currentBoard.length - 1 &&
        j === currentBoard[i].length - 1
      ) {
        newBoard[i].push(3);
      } else if (i === currentBoard.length - 1 && j === 0) {
        newBoard[i].push(4);
      } else if (i > 0 && i < currentBoard[i].length - 1 && j === 0) {
        newBoard[i].push(5);
      } else if (i === 0 && j > 0 && j < currentBoard[i].length - 1) {
        newBoard[i].push(6);
      } else if (
        i > 0 &&
        i < currentBoard[i].length - 1 &&
        j === currentBoard.length - 1
      ) {
        newBoard[i].push(7);
      } else if (
        i === currentBoard.length - 1 &&
        j > 0 &&
        j < currentBoard[i].length - 1
      ) {
        newBoard[i].push(8);
      } else {
        newBoard[i].push(9);
      }
    }
  }
  return newBoard;
}
console.log(boardPosition(board));

//3-Aplicar la funcion segun su posicionamiento i encontrar todos los vecinos vivos

//3.1 -Esquina 0-0
//3.2 - ESquina 0-y.length
//3.3 - ESquina x.length-0
//3.3 - ESquina x.length-0
//3.4 - Esquina x.length-y.length
//3.5 - lado superior
//3.6 - lado inferior
//3.7 - lado derecho
//3.8 - lado izquierdo
//3.9 - centro

//4-Analizar segun los vecinos vivos que tienen que les passa.
