const {
  boardPosition,
  cellsState,
  liveNeighborsBottom,
  liveNeighborsCenter,
  liveNeighborsLeftBottomCorner,
  liveNeighborsTop,
  liveNeighborsLeft,
  liveNeighborsRightTopCorner,
  liveNeighborsRightBottomCorner,
  liveNeighborsLeftTopCorner,
  liveNeighborsRight,
} = require("./gameOfLive");

describe("Given boardPosition function", () => {
  describe("When it receives a board array with three 1 in vertical position", () => {
    test("Then it should return an array with three 1 in horizontal position", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      let newBoard = [];
      let liveNeighbors = 0;
      let cellState = 0;

      const result = boardPosition(board);
      expect(result).toEqual(expected);
    });
  });
});
