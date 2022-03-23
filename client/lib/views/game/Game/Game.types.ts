
export enum GameScenes {
  Countdown,
  Lead,
  Sort,
}

export type GameType = {
  initialScene?: GameScenes;
  autoPlay?: boolean;
  countdownTime?: number;
  leadTime?: number;
  round: number;
};
