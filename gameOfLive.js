//GAME OF LIVE

//1r crear tablero.
const board = [];
function createBoard(cells) {
  for (let i = 0; i < cells; i++) {
    board.push([]);
    for (let j = 0; j < cells; j++) {
      board[i].push(0);
    }
  }
  return board;
}

console.log(createBoard(5));

//2-Analizar en que posicion esta cada elemento

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
