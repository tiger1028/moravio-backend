import { CellPosition } from "./type";
import { ConwayGame } from "./utils";

const generateNextConwayWorld = (liveCells: CellPosition[]): CellPosition[] => {
  const conwayGame = new ConwayGame(liveCells);
  conwayGame.moveToNextGeneration();
  return conwayGame.getLiveCells();
};

console.log(
  generateNextConwayWorld([
    {
      y: -1,
      x: -1,
    },
    {
      y: -1,
      x: 0,
    },
    {
      y: -1,
      x: 1,
    },
    {
      y: 0,
      x: -1,
    },
    {
      y: 0,
      x: 0,
    },
    {
      y: 0,
      x: 1,
    },
    {
      y: 1,
      x: -1,
    },
    {
      y: 1,
      x: 0,
    },
    {
      y: 1,
      x: 1,
    },
  ])
);
