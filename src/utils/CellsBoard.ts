import { CellPosition, CellState, CellsHash } from "../type";

export class CellsBoard {
  hash: CellsHash = {};

  setState = (cell: CellPosition, state: CellState) => {
    if (!this.hash[cell.y]) {
      this.hash[cell.y] = {};
      this.hash[cell.y][cell.x] = state;
    } else {
      this.hash[cell.y][cell.x] = state;
    }
  };

  getState = (cell: CellPosition): CellState => {
    if (!this.hash[cell.y]) {
      return 0;
    } else {
      return this.hash[cell.y][cell.x] !== undefined
        ? this.hash[cell.y][cell.x]
        : CellState.DEAD;
    }
  };
}
