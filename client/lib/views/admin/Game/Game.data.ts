import { GameType } from "./Game.types";

export const GameData: GameType = {
  handleView: function (): void {
    throw new Error("Function not implemented.");
  },
  stopRound: function (): void {
    throw new Error("Function not implemented.");
  },
  teams: [],
  round: 1,
};
