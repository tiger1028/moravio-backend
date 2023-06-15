import { CellsBoard } from "./CellsBoard";
import { CellPosition, CellState } from "../type";

export class ConwayGame {
  private cellBoard: CellsBoard;
  private minX: number;
  private maxX: number;
  private minY: number;
  private maxY: number;

  constructor(liveCells: CellPosition[]) {
    this.cellBoard = new CellsBoard();
    this.minX = Number.POSITIVE_INFINITY;
    this.maxX = Number.NEGATIVE_INFINITY;
    this.minY = Number.POSITIVE_INFINITY;
    this.maxY = Number.NEGATIVE_INFINITY;

    liveCells.forEach((cell) => {
      this.cellBoard.setState(cell, CellState.LIVE);
    });

    this.updateMinMaxRange();
  }

  moveToNextGeneration = () => {
    let newCellBoard: CellsBoard = new CellsBoard();

    for (let i = this.minY - 1; i <= this.maxY + 1; i++) {
      for (let j = this.minX - 1; j <= this.maxX + 1; j++) {
        newCellBoard.setState(
          {
            y: i,
            x: j,
          },
          this.getNewCellState({
            y: i,
            x: j,
          })
        );
      }
    }

    this.cellBoard = newCellBoard;
    this.updateMinMaxRange();
  };

  getLiveCells = (): CellPosition[] => {
    let liveCells: CellPosition[] = [];

    for (let y in this.cellBoard.hash) {
      for (let x in this.cellBoard.hash[y]) {
        if (this.cellBoard.hash[y][x] === CellState.LIVE) {
          liveCells.push({
            y: Number(y),
            x: Number(x),
          });
        }
      }
    }

    return liveCells;
  };

  private updateMinMaxRange = () => {
    for (let y in this.cellBoard.hash) {
      for (let x in this.cellBoard.hash[y]) {
        this.minX = Math.min(this.minX, Number(x));
        this.maxX = Math.max(this.maxX, Number(x));

        this.minY = Math.min(this.minY, Number(y));
        this.maxY = Math.max(this.maxY, Number(y));
      }
    }
  };

  private getNewCellState = (cell: CellPosition): CellState => {
    const state = this.cellBoard.getState(cell);
    const liveNeighboursCount = this.getLiveNeighboursCount(cell);

    if (state === CellState.DEAD && liveNeighboursCount === 3) {
      return CellState.LIVE;
    } else if (
      state === CellState.LIVE &&
      (liveNeighboursCount < 2 || liveNeighboursCount > 3)
    ) {
      return CellState.DEAD;
    } else {
      return state;
    }
  };

  private getLiveNeighboursCount = (cell: CellPosition) => {
    let sum = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        sum += this.cellBoard.getState({
          y: cell.y + i,
          x: cell.x + j,
        });
      }
    }

    sum -= this.cellBoard.getState(cell);

    return sum;
  };
}
