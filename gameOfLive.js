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

let liveNeighbors = 0;

//2-Analizar en que posicion esta cada elemento
function boardPosition(currentBoard) {
  let newBoard = [];
  for (let i = 0; i < currentBoard.length; i++) {
    newBoard.push([]);
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (i === 0 && j === 0) {
        liveNeighborsLeftTopCorner(currentBoard, i, j);

        //newBoard[i].push(1);
      } else if (i === 0 && j === currentBoard[i].length - 1) {
        liveNeighborsRightTopCorner(currentBoard, i, j);
        // newBoard[i].push(2);
      } else if (
        i === currentBoard.length - 1 &&
        j === currentBoard[i].length - 1
      ) {
        liveNeighborsRightBottomCorner(currentBoard, i, j);
        // newBoard[i].push(3);
      } else if (i === currentBoard.length - 1 && j === 0) {
        liveNeighborsLeftBottomCorner(currentBoard, i, j);
        // newBoard[i].push(4);
      } else if (i > 0 && i < currentBoard[i].length - 1 && j === 0) {
        liveNeighborsLeft(currentBoard, i, j);
        //newBoard[i].push(5);
      } else if (i === 0 && j > 0 && j < currentBoard[i].length - 1) {
        liveNeighborsTop(currentBoard, i, j);

        //newBoard[i].push(6);
      } else if (
        i > 0 &&
        i < currentBoard[i].length - 1 &&
        j === currentBoard.length - 1
      ) {
        liveNeighborsRight(currentBoard, i, j);
        //newBoard[i].push(7);
      } else if (
        i === currentBoard.length - 1 &&
        j > 0 &&
        j < currentBoard[i].length - 1
      ) {
        liveNeighborsBottom(currentBoard, i, j);
        //newBoard[i].push(8);
      } else {
        liveNeighborsCenter(currentBoard, i, j);
        // newBoard[i].push(9);
      }
    }
  }
  return newBoard;
}
console.log(boardPosition(board));

//3-Aplicar la funcion segun su posicionamiento i encontrar todos los vecinos vivos

//3.1 -Esquina 0-0
const liveNeighborsLeftTopCorner = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i][j + 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};

//3.2 - ESquina 0-y.length

const liveNeighborsRightTopCorner = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i][j - 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.3 - ESquina x.length-0
const liveNeighborsLeftBottomCorner = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.4 - Esquina x.length-y.length
const liveNeighborsRightBottomCorner = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j - 1],
    currentCell[i][j - 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.5 - lado superior
const liveNeighborsTop = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i][j - 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.6 - lado inferior
const liveNeighborsBottom = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j - 1],
    currentCell[i][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.7 - lado derecho
const liveNeighborsRight = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i][j - 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};
//3.8 - lado izquierdo
const liveNeighborsLeft = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};

//3.9 - centro
const liveNeighborsCenter = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j - 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors;
};

//4-Analizar segun los vecinos vivos que tienen que les passa.
