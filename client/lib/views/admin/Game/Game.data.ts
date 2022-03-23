import { ViewState } from "models";
import { GameType } from "./Game.types";

export const GameData: GameType = {
  handleView: function (view: ViewState): void {
    alert("handleView: " + view);
  },
  stopRound: function (): void {
    alert("stop round");
  },
  teams: [],
  round: 1,
};
