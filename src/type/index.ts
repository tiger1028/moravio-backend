export enum CellState {
  DEAD,
  LIVE,
}

export interface CellPosition {
  x: number;
  y: number;
}

export type CellsHash = Record<string, Record<string, number>>;
