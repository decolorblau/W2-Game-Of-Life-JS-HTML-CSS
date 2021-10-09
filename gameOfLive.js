const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
//console.table(board);

const liveNeighbors = (currentCell, i, j) => {
  const neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j - 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i + 1]
  );

  return neighbors.reduce((accumulator, neighbor) => accumulator + neighbor, 0);
};

console.table(newBoard(board));

/* const newBoard = (currentBoard) => {
  const nextBoard = [];
  for (let i = 0; i < currentBoard.length; i++) {
    nextBoard.push([]);
    for (let j = 0; j < currentBoard[i].length; j++) {
      

      if (board[i][j] === 1) {
        nextBoard[i].push("2");
      } else {
        nextBoard[i].push(0);
      }
    }
  }
  return nextBoard;
}; */
