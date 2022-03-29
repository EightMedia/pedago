export enum GameScene {
  Onboarding,
  Round,
  Lead,
}

export type GameType = {
  handleView: (view: ViewState) => void;
  stopRound: () => void;
  teams: Player[][];
  round: number;
};
