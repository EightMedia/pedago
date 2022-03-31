import { PlayerStatus } from "models";

export enum GameScene {
  Onboarding,
  Round,
  Lead,
}

export type GameType = {
  openSettings: () => void;
  stopRound: () => void;
  timer: boolean;
  teams: {
    name: string;
    status: PlayerStatus;
    players: string[];
  }[];
  round: {
    current: number;
    total: number;
  };
};
