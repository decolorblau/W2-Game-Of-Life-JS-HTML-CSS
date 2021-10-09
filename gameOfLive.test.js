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
  createBoard,
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

      const result = boardPosition(board);
      expect(result).toEqual(expected);
    });
  });

  describe("When it receives a board array with three 1 in vertical position", () => {
    test("Then it should return an array with three 1 in horizontal position", () => {
      const board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const result = boardPosition(board);
      expect(result).toEqual(expected);
    });
  });
});

describe("Given cellsState function", () => {
  describe("When it receives 3 neighbors live and the current cell is 0", () => {
    test("Then it should return 1", () => {
      const neighbors = 3;
      const state = 0;
      const expected = 1;

      const result = cellsState(neighbors, state);
      expect(result).toBe(expected);
    });
  });
  describe("When it receives 2 neighbors live and the current cell is 0", () => {
    test("Then it should return 0", () => {
      const neighbors = 2;
      const state = 0;
      const expected = 0;

      const result = cellsState(neighbors, state);
      expect(result).toBe(expected);
    });
  });
  describe("When it receives 3 neighbors live and the current cell is 1", () => {
    test("Then it should return 1", () => {
      const neighbors = 3;
      const state = 1;
      const expected = 1;

      const result = cellsState(neighbors, state);
      expect(result).toBe(expected);
    });
  });
  describe("When it receives 4 neighbors live and the current cell is 1", () => {
    test("Then it should return 0", () => {
      const neighbors = 4;
      const state = 1;
      const expected = 0;

      const result = cellsState(neighbors, state);
      expect(result).toBe(expected);
    });
  });
});

describe.skip("Given createBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return 5 columns and 5 rows of 0", () => {
      const cells = 5;
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = createBoard(cells);
      expect(result).toEqual(expected);
    });
  });
});
