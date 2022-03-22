import { ViewName } from "models";

export enum GameScenes {
  Countdown,
  Lead,
  Sort,
}

export type GameType = {
  handleEmit: (vn: ViewName) => void;
  initialScene?: GameScenes;
  autoPlay?: boolean;
  countdownTime?: number;
  leadTime?: number;
  round: number;
};

export type GameSortType = {
  handleDoneSorting: (order: number[]) => void;
  round: number;
};
