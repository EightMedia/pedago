import { Player, ViewState } from "models";

export type GameType = {
    handleView: (view: ViewState) => void;
    teams: Player[][];
    round: number;
};
